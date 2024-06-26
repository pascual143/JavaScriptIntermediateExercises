// Results

// 1. Sort a dictionary by value:
// Write a function that sorts a dictionary (object) by its values from highest to lowest. The dictionary can contain any data type (numbers, strings, etc.).

function sortDictionaryByValue(dictionary) {
  const sortedPairs = Object.entries(dictionary)
    .sort((a, b) => b[1] - a[1]); // Sort by value in descending order
  return Object.fromEntries(sortedPairs); // Convert back to dictionary format
}

// Example usage
const dictionary = {
  "a": 10,
  "b": 2,
  "c": 5,
  "d": 1
};

const sortedDictionary = sortDictionaryByValue(dictionary);
console.log(sortedDictionary); // Output: { d: 1, b: 2, c: 5, a: 10 }


// 2. Remove duplicates from a list:
// PSEUDOCODE
// Function: removeDuplicates(list)
// Input: list (an array containing elements)
// Output: uniqueList (a new array with only unique elements from the original list)
//Steps:
// Create an empty set uniqueSet
// Iterate through each element in the list
// If the element is not present in the uniqueSet:
// Add the element to the uniqueSet
// Create an empty list uniqueList
// Iterate through each element in the uniqueSet
// Add the element to the uniqueList
// Return the uniqueList

function removeDuplicates(list) {
  const uniqueSet = new Set(list); // Create a Set to store unique elements
  return [...uniqueSet]; // Convert Set back to an array
}

// Example usage
const list = [1, 2, 3, 4, 2, 1, 5, 3];

const uniqueList = removeDuplicates(list);
console.log(uniqueList); // Output: [1, 2, 3, 4, 5]



// 3. Find the maximum value in a nested object:
//PSEUDOCODE
// Function: findNestedMaximum(object)
// Input: object (a potentially nested object containing numeric values)
// Output: maximumValue (the highest numeric value found within the object)
// Steps:
// Initialize a variable maxValue to null (to track the maximum value found)
// Define a recursive function traverse(obj)
// This function takes an object (obj) as input.
// Iterate through each key-value pair in the obj
// Check the data type of the value:
// If the value is an object:
// Recursively call traverse(obj[key]) to explore nested objects.
// If the value is a number:
// If maxValue is null or the current value obj[key] is greater than maxValue:
// Update maxValue to the current value.
// Call the traverse function with the original object as input (to start the recursive exploration)
// Return the maxValue

function findNestedMaximum(object) {
  let maxValue = null; // Initialize maximum value

  function traverse(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        traverse(obj[key]); // Recursively traverse nested objects
      } else {
        if (maxValue === null || obj[key] > maxValue) {
          maxValue = obj[key]; // Update maximum value if found
        }
      }
    }
  }

  traverse(object);
  return maxValue;
}

// Example usage
const object = {
  prop1: 10,
  prop2: {
    prop21: 20,
    prop22: {
      prop221: 30,
      prop222: 40
    }
  },
  prop3: 5
};

const maximumValue = findNestedMaximum(object);
console.log(maximumValue); // Output: 40



// 4. Convert a date string to ISO format:
// Function: convertDateToISO(dateString)
// Input: dateString (a string representing a date in a specific format)
// Output: isoDate (a string in ISO 8601 format: YYYY-MM-DD)
// Steps:
// Create a Date object named date by parsing the dateString
// Check if the date object is valid:
// If isNaN(date.getTime()) is true (invalid date string), throw an error message indicating an invalid format.
// Extract the year, month, and day components from the date object:
// year = date.getFullYear()
// month = date.getMonth() + 1 (months are zero-indexed, so add 1)
// day = date.getDate()
// Format the month and day strings to ensure two digits (leading zeros for single digits):
// monthString = month.toString().padStart(2, '0')
// dayString = day.toString().padStart(2, '0')
// Construct the ISO 8601 formatted date string:
// isoDate = ${year}-${monthString}-${dayString}
// Return the isoDate string
function convertDateToISO(dateString) {
  const date = new Date(dateString); // Convert string to Date object
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string'); // Handle invalid format
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const day = date.getDate();

  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

// Example usage
const dateString = "March 15, 2024";

const isoDate = convertDateToISO(dateString);
console.log(isoDate); // Output: "2024-03-15"



// 5. Validate an email address:
// Function: validateEmail(email)
// Input: email (a string representing an email address)
// Output: isValid (a boolean value indicating whether the email address is valid)
// Steps:
// Define a regular expression pattern regex to match common email address formats.
// The pattern should include:
// Start of string (^)
// One or more word characters, hyphens, or periods ([\w-.]+) for the username
// An "@" symbol
// One or more word characters, hyphens, or periods for the domain name ([\w-.]+)
// A period (.)
// Two or more letter characters ([a-zA-Z]{2,}) for the top-level domain (e.g., com, org, net)
// End of string ($)
// Use the test method of the regular expression object on the email string:
// The test method returns true if the email matches the regular expression pattern, otherwise false.
// Return the result of the test method (isValid):
// true if the email is valid according to the defined pattern, false otherwise.

JavaScript
function validateEmail(email) {
  const regex = /^[\w-.]+@[\w-.]+\.[a-zA-Z]{2,}$/; // Regular expression for email format
  return regex.test(email);
}

// Example usage
const emails = ["user@example.com", "user123@domain.org", "notvalid@emailmail"];

emails.forEach(email => {
  console.log(`${email} is valid: ${validateEmail(email)}`);
});


// 6. Flatten a nested array:
// Function: flattenArray(nestedArray)
// Input: nestedArray (an array that may contain nested arrays)
// Output: flattenedArray (a new array containing all elements from the original array in a single level)
// Steps:
// Create an empty array flattenedArray to store the flattened elements.
// Define a recursive function traverse(array)
// This function takes an array (array) as input.
// Iterate through each element in the array:
// Check the data type of the element:
// If the element is an array:
// Recursively call traverse(element) to explore nested arrays further.
// If the element is not an array:
// Add the element to the flattenedArray.
// Call the traverse function with the original nestedArray as input (to start the flattening process).
// Return the flattenedArray containing all elements from the original structure, including those from nested arrays.
function flattenArray(nestedArray) {
  const flattenedArray = [];

  function traverse(array) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (Array.isArray(element)) {
        traverse(element); // Recursively flatten nested arrays
      } else {
        flattenedArray.push(element); // Add non-array elements to the flattened array
      }
    }
  }

  traverse(nestedArray);
  return flattenedArray;
}

// Example usage
const nestedArray = [1, [2, 3], 4, [[5, 6], 7, 8], 9];
const flattened = flattenArray(nestedArray);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


// 7. Count occurrences of a character in a string:
// Function: countCharacterOccurrences(character, string)
// Input:
// character (a single character you want to count)
// string (a string where you want to count the character)
// Output:
//count (an integer representing the number of times the character appears in the string)
// Steps:
// Initialize a variable count to 0 (to store the occurrence count).
// Iterate through each character in the string using a loop (e.g., for loop).
// Inside the loop, compare the current character in the string with the target character:
// If they are equal:
// Increment the count by 1.
// After iterating through the entire string:
// The count variable will hold the total number of occurrences of the character in the string.
// Return the count value.

function countCharacterOccurrences(character, string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
}

// Example usage
const character = 'a';
const string = 'Hello, world! How are you?';
const characterCount = countCharacterOccurrences(character, string);
console.log(characterCount); // Output: 4


// 8. Generate a random password:
// Function: generateRandomPassword(length)
// Input:
// length (an integer specifying the desired password length)
// Output:
// password (a string containing the generated random password)
// Steps:
// Define a string passwordCharacters containing the character set used to generate the password. This string can be customized to include desired character types (uppercase letters, lowercase letters, numbers, symbols).
// Initialize an empty string password to store the generated password.
// Iterate a loop length number of times:
// Generate a random index:
// Use Math.floor(Math.random() * passwordCharacters.length) to get a random integer within the range of the passwordCharacters string length (0 to length-1).
// Extract a random character:
// Use the random index to access a character from the passwordCharacters string and append it to the password string.
// After the loop completes:
// The password string will contain a sequence of randomly chosen characters from the defined character set.
// Return the password string.
function generateRandomPassword(length) {
  const passwordCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={}[]|;:<>,.?/';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    password += passwordCharacters[randomIndex];
  }

  return password;
}

// Example usage
const passwordLength = 12;
const generatedPassword = generateRandomPassword(passwordLength);
console.log(generatedPassword); // Example output: "T6&8yZUd3x"


// 9. Deep copy an object:
// Function: deepCopyObject(object)
// Input:
// object (the object you want to create a deep copy of)
// Output:
// copiedObject (a new object that is a deep copy of the original)
// Steps:
// Handle base cases:
// If the object is null, undefined, or a primitive value (string, number, boolean):
// Simply return the object as-is. There's nothing to copy for primitive values.
// Create a new empty object copiedObject to store the copied data.
// Iterate through each key-value pair in the original object:
// Check if the property is directly owned by the object (not inherited):
// Use object.hasOwnProperty(key) to verify this.
// For each owned property:
// Check the data type of the property value:
// If the value is an object:
// Recursively call deepCopyObject(object[key]) to create a deep copy of the nested object and assign it to the corresponding key in the copiedObject.
// If the value is not an object:
// Simply assign the value from the original object to the corresponding key in the copiedObject.
// After iterating through all properties:
// The copiedObject will contain copies of all properties from the original object, including those from nested objects.
// Return the copiedObject which is a deep copy of the original object.
function deepCopyObject(object) {
  if (!object || typeof object !== 'object') {
    return object; // Return primitive values or null as-is
  }

  const copiedObject = {};
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      copiedObject[key] = deepCopyObject(object[key]); // Recursively copy nested objects
    }
  }
  return copiedObject;
}

// Example usage
const originalObject = {
  prop1: 10,
  prop2: {
    nestedProp: 20
  },
  prop3: [1, 2, 3]
};

const copiedObject = deepCopyObject(originalObject);
console.log(copiedObject); // Should be a deep copy of originalObject
console.log(originalObject === copiedObject); // Should be false (different references)

// Modify the copied object to demonstrate independence
copiedObject.prop2.nestedProp = 30;
copiedObject.prop3[0] = 5;
console.log(originalObject); // Original object should remain unchanged
console.log(copiedObject); // Modified copied object


// 10. Create a simple calculator:
// Function: simpleCalculator(num1, num2, operator)
// Input:
// num1 (the first number)
// num2 (the second number)
// operator (a string representing the operation to perform: +, -, *, /)
// Output:
// result (the numeric result of the calculation)
// Steps:
// Use a switch statement based on the operator:
// Case '+': Add num1 and num2 and return the result.
// Case '-': Subtract num2 from num1 and return the result.
// Case '*': Multiply num1 and num2 and return the result.
// Case '/':
// Check if num2 is equal to zero.
// If so, throw an error indicating "Division by zero" (handle this in the calling code using a try...catch block).
// If num2 is not zero, divide num1 by num2 and return the result.
// Default: If the operator is not a valid option (+, -, *, /), throw an error indicating "Invalid operator".
function simpleCalculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        throw new Error('Division by zero');
      }
      return num1 / num2;
    default:
      throw new Error('Invalid operator');
  }
}

// Example usage
try {
  console.log(simpleCalculator(10, 5, '+')); // Output: 15
  console.log(simpleCalculator(4, 2, '*')); // Output: 8
  console.log(simpleCalculator(12, 3, '/')); // Output:


  
// 11. Find the missing element in an array of consecutive numbers:
// Function: findMissingNumber(inputArray)
// Input:
// inputArray (an array containing consecutive integers with one element missing)
// Output:
// missingNumber (the integer that is missing from the sequence)
// Steps:
// Calculate the expected sum:
// Assuming the array contains consecutive integers from a known starting and ending point (e.g., 0 to 100), calculate the sum of all consecutive numbers in the range.
// In this example, we use the formula for the sum of an arithmetic series: expectedSum = (first number + last number) * number of elements / 2.
// Calculate the actual sum:
// Use the reduce method on the inputArray to iterate through each element and add them together. This gives you the actual sum of the numbers present in the array.
// Find the missing difference:
// Subtract the actual sum from the expected sum. The result will be the value of the missing number.
function findMissingNumber(inputArray) {
  const expectedSum = (100 * (100 + 1)) / 2; // Sum of consecutive numbers from 0 to 100
  const actualSum = inputArray.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Example usage
const inputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 99, 100];
const missingNumber = findMissingNumber(inputArray);
console.log(missingNumber); // Output: 80

  
// 12. Determine if a string is a palindrome:
// Function: isPalindrome(inputString)
// Input:
// inputString (a string to be checked for palindrome)
// Output:
// isPalindrome (a boolean value indicating whether the inputString is a palindrome)
// Steps:
// Normalize the input string:
// Convert the string to lowercase (to make comparisons case-insensitive).
// Remove any non-alphanumeric characters (letters and numbers) from the string. This could include spaces, punctuation symbols, etc.
// Reverse the normalized string:
// Split the normalized string into an array of individual characters.
// Reverse the order of the characters in the array.
// Join the reversed character array back into a string.
// Compare the original and reversed strings:
// Check if the normalized inputString is equal to the reversedString.
// Return the result:
// If the two strings are equal, the inputString is a palindrome, so return true.
// If the strings are not equal, the inputString is not a palindrome, so return false.
function isPalindrome(inputString) {
  const normalizedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove spaces and punctuation
  const reversedString = normalizedString.split('').reverse().join('');
  return normalizedString === reversedString;
}

// Example usage
const inputString = "Race car";
const isPal = isPalindrome(inputString);
console.log(isPal); // Output: true


// 13. Count the number of islands in a 2D grid:
// Function: countIslands(grid)
// Input:
// Grid (a 2D array representing a grid where '1' indicates land and '0' indicates water)
// Output:
// islandCount (an integer representing the total number of islands in the grid)
// Steps:
// Create a set visited to track visited cells. This will help avoid revisiting the same cell during island exploration.
// Define a recursive function dfs(row, col) for Depth-First Search (DFS).
// This function takes the coordinates (row and col) of a cell as input.
// It checks various conditions to determine if further exploration is needed:
// Out of bounds: If the cell is outside the grid boundaries, return.
// Visited cell: If the cell has already been visited (checked in a previous DFS call), return (avoid revisiting).
// Water cell: If the cell value is '0' (water), return (no island exploration needed on water).
// If the cell is a valid unvisited land cell (grid[row][col] === '1'), mark it as visited using visited.add(row−{col}).
// Recursively call dfs on the four neighboring cells (up, down, left, right) to explore potential connections and continue island discovery.
// Initialize islandCount to 0. This will store the total number of islands found.
// Iterate through each cell in the grid using nested loops.
// For each cell:
// If the cell value is '1' (land) and it hasn't been visited before (!visited.has(row−{col})), it's a potential starting point for a new island.
// Increment islandCount by 1.
// Call dfs(row, col) to start exploring the island from this cell. This will recursively explore connected land cells, marking them as visited.
// After iterating through all cells, islandCount will hold the total number of islands discovered in the grid.
function countIslands(grid) {
  const visited = new Set(); // To track visited cells

  function dfs(row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || visited.has(`${row}-${col}`) || grid[row][col] === '0') {
      return; // Out of bounds, visited, or water cell
    }

    visited.add(`${row}-${col}`); // Mark cell as visited

    // Explore neighbors recursively
    dfs(row - 1, col); // Up
    dfs(row + 1, col); // Down
    dfs(row, col - 1); // Left
    dfs(row, col + 1); // Right
  }

  let islandCount = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1' && !visited.has(`${row}-${col}`)) {
        islandCount++; // Start DFS from an unvisited land cell
        dfs(row, col);
      }
    }
  }

  return islandCount;
}

// Example usage
const grid = [
  ['1', '1', '1', '0', '0'],
  ['1', '1', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
  ['0', '0', '0', '1', '1']
];

const islandCount = countIslands(grid);
console.log(islandCount); // Output: 2



// 15.  Implement a recursive function to calculate the factorial of a number:
// Function: calculateFactorial(number)
// Input:
// number (a non-negative integer)
// Output:
// factorial (the factorial value of the number)
// Steps:
// Base case:
// If number is equal to 0, the factorial is 1. Return 1.
// Recursive case:
// Otherwise, return the product of number and the factorial of number - 1.
// This breaks down the factorial calculation into smaller subproblems (number - 1 factorial) until reaching the base case (factorial of 0).
function calculateFactorial(number) {
  if (number === 0) {
    return 1; // Base case: factorial of 0 is 1
  } else {
    return number * calculate 



// 16.   Find the peak element in a 2D matrix:
// Function: findPeakElement(matrix)
// Input:
// matrix (a 2D array representing a matrix where each element represents a value)
// Output:
// peakElement (an array containing two elements: [row, col] representing the coordinates of the peak element)
// Steps:
// Get the number of rows (numRows) and columns (numCols) in the matrix.
// Initialize two variables:
// row (starting from the top row, index 0)
// col (starting from the rightmost column, index numCols - 1)
// Use a while loop to iterate until both row and col are out of bounds:
// Get the current element value: currentElement = matrix[row][col]
// Get the values of the right and bottom neighbors:
// rightNeighbor: Check if the right column index is within bounds. If yes, access the element value in matrix[row][col + 1]. Otherwise, set it to a very high positive value (e.g., Number.POSITIVE_INFINITY) to ensure it's not considered the peak.
// bottomNeighbor: Check if the bottom row index is within bounds. If yes, access the element value in matrix[row + 1][col]. Otherwise, set it to a very high positive value for the same reason.
// Compare the current element with its neighbors:
// If currentElement is greater than or equal to both rightNeighbor and bottomNeighbor, it's a peak element.
// Return [row, col] as the peak element coordinates.
// If currentElement is less than rightNeighbor, there might be a higher peak to the right.
// Move right by incrementing col.
// Otherwise (currentElement is less than bottomNeighbor), there might be a higher peak below.
// Move down by incrementing row.
// If the loop finishes without finding a peak (both row and col become out of bounds), return [-1, -1] to indicate no peak element was found.
    
function findPeakElement(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  let row = 0;
  let col = numCols - 1;

  while (row < numRows && col >= 0) {
    const currentElement = matrix[row][col];
    const rightNeighbor = col < numCols - 1 ? matrix[row][col + 1] : Number.POSITIVE_INFINITY;
    const bottomNeighbor = row < numRows - 1 ? matrix[row + 1][col] : Number.POSITIVE_INFINITY;

    if (currentElement >= rightNeighbor && currentElement >= bottomNeighbor) {
      // Peak element found
      return [row, col];
    } else if (currentElement < rightNeighbor) {
      // Move right
      col++;
    } else {
      // Move down
      row++;
    }
  }

  // No peak element found
  return [-1, -1];
}

// Example usage
const matrix = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

const peakElement = findPeakElement(matrix);
console.log(peakElement); // Output: [0, 0] (row 0, column 0)


// 17. Count the number of occurrences of a pattern in a string:
// Function: countPatternOccurrences(pattern, text)
// Input:
// pattern (a string representing the pattern to search for)
// text (a string representing the text to search within)
// Output:
// count (an integer representing the total number of occurrences of the pattern in the text string)
// Steps:
// Get the length of the pattern (patternLength).
// Initialize a variable count to 0. This will store the number of pattern occurrences found.
// Iterate through the text string using a loop.
// Start the loop at index i = 0 and iterate up to text.length - patternLength. This ensures we don't go out of bounds when trying to extract substrings for comparison.
// Inside the loop:
// Extract a substring of the text string with the same length as the pattern starting from the current index i. You can use text.slice(i, i + patternLength) to achieve this.
// Compare the extracted substring with the pattern using strict equality (===).
// If the comparison is true (extracted substring matches the pattern):
// Increment the count by 1 to indicate one occurrence found.
// After the loop completes:
// The count variable will hold the total number of times the pattern was found in the text string.
// Return the count value.
    
function countPatternOccurrences(pattern, text) {
  const patternLength = pattern.length;
  let count = 0;

  for (let i = 0; i <= text.length - patternLength; i++) {
    if (text.slice(i, i + patternLength) === pattern) {
      count++;
    }
  }

  return count;
}

// Example usage
const pattern = "abca";
const text = "ababababcabc";

const occurrenceCount = countPatternOccurrences(pattern, text);
console.log(occurrenceCount); // Output: 3


// 18. Implement a depth-first search (DFS) algorithm for a graph:

function depthFirstSearch(graph, startNode) {
  const visited = new Set(); // To track visited nodes

  function dfs(node) {
    visited.add(node);
    console.log(node); // Process the node

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor); // Recursively explore unvisited neighbors
      }
    }
  }

  dfs(startNode);
}

// Example usage
const graph = {
  0: [1, 2],
  1: [3],
  2: [1],
  3: []
};

depthFirstSearch(graph, 0); // Output: 0 1 3 2



// 19.  Implement a breadth-first search (BFS) algorithm for a graph:

function breadthFirstSearch(graph, startNode) {
  const queue = [startNode]; // Queue for BFS traversal
  const visited = new Set();

  while (queue.length > 0) {
    const currentNode = queue.shift();
    visited.add(currentNode);
    console.log(currentNode); // Process the node

    for (const neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor); // Add unvisited neighbors to the queue
      }
    }
  }
}

// Example usage
const graph = {
  0: [1, 2],
  1: [3],
  2: [1],
  3: []
};

breadthFirstSearch(graph, 0); // Output: 0 1 2 3
Usa el código con precaución.
content_copy
5. Implement a Huffman encoding algorithm for data compression:

JavaScript
function huffmanEncoding(text) {
  // Create a frequency table for each character
  const frequencyTable = {};
  for (const char of text) {
    frequencyTable[char] = (frequencyTable[char] || 0) + 1;
  }

  // Build the Huffman tree
  const tree = buildHuffmanTree(frequencyTable);

  // Generate Huffman codes for each character
  const huffmanCodes = {};

    
// 20. Implement a Huffman encoding algorithm for data compression:

function huffmanEncoding(text) {
  // Create a frequency table for each character
  const frequencyTable = {};
  for (const char of text) {
    frequencyTable[char] = (frequencyTable[char] || 0) + 1;
  }

  // Build the Huffman tree
  const tree = buildHuffmanTree(frequencyTable);

  // Generate Huffman codes for each character
  const huffmanCodes = {};
  generateHuffmanCodes(tree, '', huffmanCodes);

  // Encode the text using Huffman codes
  const encodedText = encodeText(text, huffmanCodes);

  // Return the encoded text and Huffman codes
  return { encodedText, huffmanCodes };

  function generateHuffmanCodes(node, currentCode, huffmanCodes) {
    if (!node.left && !node.right) {
      huffmanCodes[node.value] = currentCode;
      return;
    }

    if (node.left) {
      generateHuffmanCodes(node.left, currentCode + '0', huffmanCodes);
    }

    if (node.right) {
      generateHuffmanCodes(node.right, currentCode + '1', huffmanCodes);
    }
  }

  function encodeText(text, huffmanCodes) {
    let encodedText = '';
    for (const char of text) {
      encodedText += huffmanCodes[char];
    }
    return encodedText;
  }
}

// Example usage
const text = "Hello, world! How are you?";

const encodedData = huffmanEncoding(text);
console.log(encodedData.encodedText); // Encoded representation of the text
console.log(encodedData.huffmanCodes); // Huffman codes for each character



