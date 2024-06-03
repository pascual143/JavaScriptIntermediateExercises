// 16. Implement a Trie data structure and its operations:
// Create a Trie data structure to efficiently store and retrieve words. Implement the following operations:
// insert(word): Inserts a new word into the Trie.
// search(word): Checks whether a given word exists in the Trie.
// startsWith(prefix): Returns all words in the Trie that start with the given prefix.

const trie = new Trie();

trie.insert('apple');
trie.insert('appetite');
trie.insert('appetizer');

console.log(trie.search('apple')); // Output: true
console.log(trie.search('appetizer')); // Output: true
console.log(trie.startsWith('app')); // Output: ['apple', 'appetite', 'appetizer']



// 17. Implement a custom sorting algorithm:

// Create a function that takes an array of comparable objects and sorts them using a custom comparison function. 
// The comparison function should specify the sorting criteria.

const items = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Peter', age: 40 }
];

function sortByAge(a, b) {
  return a.age - b.age; // Sort by age in ascending order
}

const sortedItems = items.sort(sortByAge);
console.log(sortedItems); // Output: [{ name: 'Jane', age: 25 }, { name: 'John', age: 30 }, { name: 'Peter', age: 40 }]


// 18. Implement a debouncing function:
// Create a function that takes a callback function and a delay in milliseconds as arguments. 
// The debounced function should only execute the callback function after a certain amount of time has passed since the last call, 
// preventing excessive execution for frequently triggered events.

function debounce(callback, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId); // Cancel any pending timer

    timerId = setTimeout(() => {
      callback(...args); // Execute the callback after the delay
    }, delay);
  };
}

const handleButtonClick = () => {
  console.log('Button clicked!');
};

const debouncedClickHandler = debounce(handleButtonClick, 500); // Debounce with 500ms delay

// Repeated button clicks will only trigger the callback once every 500ms
document.getElementById('button').addEventListener('click', debouncedClickHandler);


// 19. Implement a custom event emitter:
// Create a class representing an event emitter that allows subscribers to listen for and receive events. Implement methods for adding event listeners, removing listeners, and triggering events.

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(fn => fn !== callback);
    }
  }

  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback(...args));
    }
  }
}

const emitter = new EventEmitter();

emitter.on('dataReceived', (data) => console.log('Received data:', data));

emitter.emit('dataReceived', { message: 'Hello from event emitter!' }); // Output: Received data: { message: 'Hello from event emitter!' }

