// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ';' to end IIFE and avoid error.

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


/*
    NOTES(Use of IIFE):-
        -Runs immediately after it’s defined.
        -Avoids global scope pollution by creating a private/local scope.
        -Often used for module pattern or initializing code safely.
*/