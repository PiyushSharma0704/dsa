// recurssion
// Recursion is when a function calls itself to solve a smaller version of the same problem.
// A base case is the condition that stops recursion.
// When a function calls itself.
// Base Case
// ↓
// Do Work
// ↓
// Call Smaller Problem
// Whenever a function is called, JavaScript puts it on the Call Stack.
// factorial(5)
// │
// ├── factorial(4)
// │   │
// │   ├── factorial(3)
// │   │   │
// │   │   ├── factorial(2)
// │   │   │   │
// │   │   │   └── factorial(1)
// │   │   │
// │   │   └── returns 2
// │   │
// │   └── returns 6
// │
// └── returns 24

// returns 120


// function printNumbers(n){
//     if(n === 0){
//         return;
//     }
//     printNumbers(n - 1)
//     console.log(n)
// }

// console.log("printNumbers",printNumbers(5))

const printFactorial = (n) => {
    if(n === 1){
        return 1;
    }

    return n*printFactorial(n-1)
}

console.log("printFactorial", printFactorial(5))
























