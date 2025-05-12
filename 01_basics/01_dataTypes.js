"use strict"; // Treats all JS code as newer version, but it's mostly unnecessary now as modern JS uses it by default.

let name = "Himesh"
let age = 18
let isLoggedIn = true


console.log(typeof undefined); // undefined
console.log(typeof null); // object

/*
    NOTES:-

    - No alert() in Node.js — use console.log() instead.
    - Avoid semicolons — prioritize code readability.
    - Use MDN for documentation (not original sources).
    - ECMAScript is the standard for JS features.
    - Primitive Data Types:
        - Number: Represents numeric values (e.g., 10, 3.14).
        - BigInt: Represents large integers (e.g., 1234567890n).
        - String: Represents text (e.g., "Hello").
        - Boolean: Represents true or false.
        - Null: A standalone value representing "no value" (e.g., null).
        - Undefined: A variable that is declared but not assigned a value.
        - Symbol: Represents a unique and immutable value, mainly used for object property keys (e.g., Symbol('id')).
    - Non-Primitive Data Types:
        - Object: A collection of key-value pairs (e.g., {name: "Himesh", age: 25}).
        - Array: A type of object used to store ordered collections (e.g., [1, 2, 3]).
        - Function: A block of code that can be called to perform a task (e.g., function greet() { console.log("Hello"); }).
*/