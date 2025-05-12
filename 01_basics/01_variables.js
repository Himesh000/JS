const accountId = 123123;
let accountEmail = "himesh@google.com";
var accountPassword = 12345;
let accountState;

console.table([accountId , accountEmail , accountPassword , accountState])

/*
    NOTES:-
    
    - Use const for constants and let for variables.
    - Avoid var – it’s function-scoped and lacks block scope.
    - Declaring without a keyword creates unintended global variables (not recommended).
    - var and let are initialized with undefined by default.
    - const must be initialized during declaration or it will throw an error.
    - Use console.table() to print data in a tabular format — more readable than console.log() for 
      arrays and objects.
*/

