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
