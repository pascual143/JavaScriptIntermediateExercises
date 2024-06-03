// Results

// 1. Sort a dictionary by value:
// Write a function that sorts a dictionary (object) by its values from highest to lowest. The dictionary can contain any data type (numbers, strings, etc.).
// PSEUDOCODE

// Create an empty list sortedList
// Iterate through each key-value pair in the dictionary
// Add the key-value pair as a tuple ((key, value)) to the sortedList
// Sort the sortedList using a custom comparison function:
// The comparison function takes two tuples ((key1, value1) and (key2, value2)) as arguments.
// It should return:
// -1 if value1 is greater than value2 (descending order)
// 0 if value1 is equal to value2
// 1 if value1 is less than value2
// Create an empty dictionary sortedDictionary
// Iterate through the sorted sortedList
// For each tuple (key, value), add them as a key-value pair to the sortedDictionary
// Return the sortedDictionary

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
JavaScript
function removeDuplicates(list) {
  const uniqueSet = new Set(list); // Create a Set to store unique elements
  return [...uniqueSet]; // Convert Set back to an array
}

// Example usage
const list = [1, 2, 3, 4, 2, 1, 5, 3];

const uniqueList = removeDuplicates(list);
console.log(uniqueList); // Output: [1, 2, 3, 4, 5]



// 3. Find the maximum value in a nested object:

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

function calculateFactorial(number) {
  if (number === 0) {
    return 1; // Base case: factorial of 0 is 1
  } else {
    return number * calculate 



// 16.   Find the peak element in a 2D matrix:

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



