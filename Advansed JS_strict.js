// Strict Mode

"use strict"


// Not a good code
// reason: type of add is not defined

function sum(a, b){
    add = a + b
    console.log(add)
}

sum(10, 10)

// good code

// function sum(a, b){
//     var add = a + b
//     console.log(add)
// }

// sum(10, 10)
