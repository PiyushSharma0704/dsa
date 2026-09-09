// remove Duplicate
// I= [1, 2, 2, 3, 4, 4]
// O= [1, 2, 3, 4]
// Questions for interviewer
// Array is sorted or un-sorted
// Do we need to maintain order
// Extra space is allowed or not

// let arr = [1, 2, 2, 3, 4, 4];

// let uniqueArray = [... new Set(arr)]

// console.log(uniqueArray)

let arr = [1, 2, 2, 3, 4, 4];
let uniqueArray = []

for(let i = 0; i < arr.length; i++){
    if(!uniqueArray.includes(arr[i])){
        uniqueArray.push(arr[i])
    }
}

console.log("uniqueArray", uniqueArray)



