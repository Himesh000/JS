const name = "himesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); Not Recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // **String interpolation** allows embedding variables or expressions inside strings using backticks and `${}` — e.g., `` `Hello, ${name}` ``.


const gameName = new String('himesh-hv-com') // => String is defined as object.

// console.log(gameName[0]);
// console.log(gameName.__proto__);  


// console.log(gameName.length);  => Property
// console.log(gameName.toUpperCase());  => Function
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));