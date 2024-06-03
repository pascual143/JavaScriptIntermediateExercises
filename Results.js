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
