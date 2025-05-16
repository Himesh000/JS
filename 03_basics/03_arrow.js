/*
    NOTES :-

        - "this" refers to the context in which a function is executed. It points to different objects depending on how and where a function is called.
        - In the browser, "this" refers to the window in global scope or the object that calls the function.
        - In Node.js, "this" in the global scope refers to an empty object ({}), not global.
        - Inside regular functions, "this" is undefined in strict mode.
        - Arrow functions do not have their own "this"; they inherit it from the outer (lexical) scope.

*/

const user = {
    username: "himesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

/*
    NOTES :-

        - Explicit return uses {} and requires the return keyword.
        - Implicit return omits {} and automatically returns the expression.
        - Use explicit when writing multiple lines; use implicit for cleaner one-liners.
*/