list// Exercises

// 1. Sort a dictionary by value:
// Write a function that sorts a dictionary (object) by its values from highest to lowest. The dictionary can contain any data type (numbers, strings, etc.).
const dictionary = {
  "a": 10,
  "b": 2,
  "c": 5,
  "d": 1
}

function sortDictionaryByValue(dictionary) {
   // Impliment the function here
}

console.log(sortDictionaryByValue(dictionary)) // Expected result: (d: 1, b:2, c: 5, a: 10)


// 2. Remove duplicates from a list:

// Writes a function that removes duplicates elements from a list of any data type (numbers, strings, objects, etc). The order of the remaining elements should not be altered.

const list = [1, 2, 3, 4, 2, 1, 5, 3];

function removeDuplicates(list) {
  // Implement function here
}

console.log(removeDuplicates(list))  // Expected result: [1,2,3,4,5]


// 3. Find the maximum value in a nested object:
// Write a function that finds the maximum value in a nested object of any depth. the function should be recursive and handle complex data structures.

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

function findNestedMaximum(object) {
  // Implement the function here
}

console.log(findNestedMaximum(object)) // Expected result: 40

// 4. Convert a date string to ISO format:

// Write a function that converts a human-readable date string to ISO 8601 format (YYYY-MM-DD).

const dateString = "March 15, 2024";

function convertDateToISO(dateString) {
  // Implement the function here
}

console.log(convertDateToISO(dateString)); // Expected result: "2024-03-15"

// 5. Validate an email address.
// Write a function that validates whether a text string is a valid email address using a regular expression.

const emails = ["user@example.com", "user123@domain.org", "notvalid@emailmail"];

function validateEmail(email) {
  // Implement the function here
}

emails.forEach(email => {
  console.log(`${email} is valid: ${validateEmail(email)}`);
});



// 6.  Flatten a nested array:
//Write a function that takes a nested array of any depth and flattens it into a single-dimensional array.

const nestedArray = [1, [2, 3], 4, [[5, 6], 7, 8], 9];

function flattenArray(nestedArray) {
  // Implement the function here
}

console.log(flattenArray(nestedArray)); // Expected result: [1, 2, 3, 4, 5, 6, 7, 8, 9]



// 7. Count occurrences of a character in a string:
// Write a function that counts the occurrences of a specific character within a given string.


const character = 'a';
const string = 'Hello, world! How are you?';

function countCharacterOccurrences(character, string) {
  // Implement the function here
}

console.log(countCharacterOccurrences(character, string)); // Expected result: 4


// 8. Generate a random password:
// Write a function that generates a random password of a specified length, containing a mix of upper and lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
  // Implement the function here
}

const password = generateRandomPassword(12);
console.log(password); // Example output: "T6&8yZUd3x"



// 9. Deep copy an object:

// Write a function that creates a deep copy of an object, ensuring that all nested properties and references are copied independently.

const originalObject = {
  prop1: 10,
  prop2: {
    nestedProp: 20
  },
  prop3: [1, 2, 3]
};

function deepCopyObject(object) {
  // Implement the function here
}

const copiedObject = deepCopyObject(originalObject);
console.log(copiedObject); // Should be a deep copy of originalObject
console.log(originalObject === copiedObject); // Should be false (different references)

// Modify the copied object to demonstrate independence
copiedObject.prop2.nestedProp = 30;
copiedObject.prop3[0] = 5;
console.log(originalObject); // Original object should remain unchanged
console.log(copiedObject); // Modified copied object


// 10. Create a simple calculator:

// Write a function that takes two numbers and an operator (+, -, *, /) and performs the corresponding mathematical operation, returning the result. Handle invalid operator inputs gracefully.

function simpleCalculator(num1, num2, operator) {
  // Implement the function here
}

console.log(simpleCalculator(10, 5, '+')); // Output: 15
console.log(simpleCalculator(4, 2, '*')); // Output: 8
console.log(simpleCalculator(12, 3, '/')); // Output: 4
console.log(simpleCalculator(1, 0, '%')); // Output: "Invalid operator"



// 11.  Find the missing element in an array of consecutive numbers:
// Given an array of integers containing consecutive numbers from 0 to 100 (inclusive), except for one missing number, find and return the missing number.

const inputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 99, 100]; // Missing number is 80

function findMissingNumber(inputArray) {
  // Implement the function here
}

console.log(findMissingNumber(inputArray)); // Expected output: 80



// 12. Determine if a string is a palindrome:

Write a function that checks whether a given string is a palindrome, ignoring spaces and punctuation.

const inputString = "Race car"; // Palindrome when ignoring spaces and punctuation

function isPalindrome(inputString) {
  // Implement the function here
}

console.log(isPalindrome(inputString)); // Expected output: true


// 13. Count the number of islands in a 2D grid:

// Given a 2D grid representing a landmass ('1') and water ('0'), count the number of distinct islands. Two islands are considered connected if they share a common cell horizontally or vertically.

const grid = [
  ['1', '1', '1', '0', '0'],
  ['1', '1', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
  ['0', '0', '0', '1', '1']
]; // Expected output: 2 (two distinct islands)

function countIslands(grid) {
  // Implement the function here
}

console.log(countIslands(grid));

// 14. Implement a binary search algorithm:

Create a function that performs a binary search on a sorted array of numbers to find the index of a given target value. If the target is not present, return the insertion point for it.

Example:

JavaScript
const inputArray = [10, 20, 35, 45, 50, 70, 80, 95];
const targetValue = 40; // Target not present in the array

function binarySearch(inputArray, targetValue) {
  // Implement the function here
}

console.log(binarySearch(inputArray, targetValue)); // Expected output: 3 (insertion point for 40)


// 15. Implement a recursive function to calculate the factorial of a number:

// Write a recursive function that calculates the factorial of a non-negative integer.

function calculateFactorial(number) {
  // Implement the recursive function here
}

console.log(calculateFactorial(5)); // Expected output: 120



// 16. Find the peak element in a 2D matrix.
// Given a 2D matrix where each row is sorted in non-decreasing order, find the row with the smallest peak element. 
// A peak element is an element that is an element that is greater than or equal to its neightbors (including the element on the same row and the adjancent rows, if any)

Function findPeakElement(matrix) {
  // Implement the function here
}

const matrix = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
]

const peakelement = findPeakElement(matrix);
console.log(peakelement); //Element output: [0, 0] (row 0, column 0)


// 17. count the number of occurrences of a pattern in a string:
// Write a function that counts the number f non-overlapping ocurrencces of a given pattern(substring) in a text string.
// The pattern and text can be of any length.

function countPatternOccurrences(pattern, text) {
  // Implement the code here
}

const pattern = "abca";
const text = "ababababcabc";

const occurrenceCount = countPatternOccurrences(pattern, text);
console.log(occurrenceCount); //Expected output: 3


// 18. Implement a depth-first search (DFS) algorithm for a graph:

// Create a function that performs a depth-first search (DFS) traversal on a graph. The graph can be represented using an adjacency list or adjacency matrix.

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

const graph = {
  0: [1, 2],
  1: [3],
  2: [1],
  3: []
};

depthFirstSearch(graph, 0); // Output: 0 1 3 2



//  19.  Implement a breadth-first search (BFS) algorithm for a graph:

// Create a function that performs a breadth-first search (BFS) traversal on a graph. The graph can be represented using an adjacency list or adjacency matrix.

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

const graph = {
  0: [1, 2],
  1: [3],
  2: [1],
  3: []
};

breadthFirstSearch(graph, 0); // Output: 0 1 2 3



// 20. Implement a Huffman encoding algorithm for data compression:

Create a function that implements Huffman encoding for data compression. Huffman encoding assigns shorter codes to more frequent characters, reducing the overall bit representation of a text file.

Starting code:

JavaScript
function huffmanEncoding(text) {
  // Implement the function here
}

const text = "Hello, world! How are you?";

const encodedText = huffmanEncoding(text);
console.log(encodedText); // Encoded representation of the text
