// console.log(2 > 1);    
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);

/*
    NOTES:- 

    - Comparing same data types works as expected.
    - Comparing different data types can give unpredictable results due to type coercion 
      (e.g., "5" == 5 is true, but "5" === 5 is false).
    - <, <=, >, >= convert values to numbers (if possible) before comparing.
    - == allows type coercion (e.g., "5" == 5 is true).
    - === checks both value and type (e.g., "5" === 5 is false).
    - Coercion in JavaScript means automatically converting one data type to another  
      when needed.
*/