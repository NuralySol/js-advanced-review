// Review for JS basics and Advanced concepts. 
//! Asynchronous JS, Promises, Async/Await, Fetch API, ES6+ features, OOP, Functional Programming, Error Handling, DOM Manipulation, etc.
// To Start QUOKKA.js in VS Code, use the shortcut: Ctrl + K, Q
// To Stop QUOKKA.js in VS Code, use the shortcut: Ctrl + K, J
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello World');
        }, 2000);
    });
}

async function getData() {
    try {
    const result = await fetchData();
    console.log(result);
    } catch (error) {
    console.error(error);
    }
    }
getData();
    
//! Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.

const numbers = [1, 2, 3, 4, 5]; 

// using map to double the values of the numbers array
const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers); 

// use reduce to sum all the values of the numbers array
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// use filter to get all the even numbers from the numbers array
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// use find to get the first even number from the numbers array
const firstEvenNumber = numbers.find((num) => num % 2 === 0);
console.log(firstEvenNumber);

// use some to check if there are even numbers in the numbers array
const hasEvenNumbers = numbers.some((num) => num % 2 === 0); // returns a bool value
console.log(hasEvenNumbers); // Boolean: true

// use every to check if all the numbers in the numbers array are even
const allEvenNumbers = numbers.every((num) => num % 2 === 0); // returns a bool value
console.log(allEvenNumbers); 

//! Generators are functions that can be paused and resumed. They are created using a function* declaration and yield keyword.

function* fibonacciSequence() { 
    let prev = 0;
    let curr = 1;

    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fibonacci = fibonacciSequence();

console.log(fibonacci.next().value); 
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value); 

//! Error handling and debugging are important parts of programming. In JavaScript, you can use try...catch blocks to handle errors and console.log() to debug your code.

try {
    throw new Error('Something went wrong');
} catch (error) {
    console.error(error.message);
}

//! Proxies and Reflect are advanced features in JavaScript that allow you to intercept and customize object behavior.

const handler = {
    get: function (target, property) {
        console.log(`Getting property: ${property}`); // custom behavior
        return property in target ? target[property] : undefined; // default behavior
    },
    set: function (target, property, value) {
        console.log(`Setting property: ${property} to ${value}`); // custom behavior
        target[property] = value; // default behavior
        return true; // indicate that the assignment was successful
    },
};

const proxyObj = new Proxy({}, handler);

proxyObj.name = 'Alice'; // Setting property: name to Alice
console.log(proxyObj.name); // Getting property: name, Alice

// Closures are functions that have access to variables from an outer function even after the outer function has finished executing.

function outerFunction() {
    const message = 'Hello';

    function innerFunction() {
        console.log(message);
    }
    return innerFunction;
    }
const myFunction = outerFunction();
myFunction(); 
console.log(myFunction); 

//! Memoization is an optimization technique used to speed up function calls by caching the results of expensive function calls and returning the cached result when the same inputs occur again.
function memoizedAddition() {
    const cache = {};
    return function (num) {
        if (num in cache) {
            console.log('Fetching from cache...');
            return cache[num];
        } else {
            console.log('Calculating result...');
            const result = num + 10;
            cache[num] = result;
            return result;
        }
    };
}
const memoizedAdd = memoizedAddition();
console.log(memoizedAdd(5)); // Output: Calculating result... 15
console.log(memoizedAdd(5)); // Output: Fetching from cache... 15

//! Event Handling and Event Loop are important concepts in JavaScript that allow you to respond to user actions and execute code asynchronously.

/*! 

const button = document.getElementById('myButton');
function handleClick() {
    console.log('Button clicked');
}
button.addEventListener('click', handleClick);

*/

//! Promise.all and Promise.race: Promise.all takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved. Promise.race takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2'), 2000));
Promise.all([promise1, promise2]).then((results) => {
    console.log('Promise.all:', results);
});
Promise.race([promise1, promise2]).then((result) => {
    console.log('Promise.race:', result);
});

