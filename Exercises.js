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
