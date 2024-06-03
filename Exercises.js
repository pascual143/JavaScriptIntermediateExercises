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

