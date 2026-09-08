// Find the number and return its index

const arr = [1, 2, 3, 4, 5, 6]

const findNumber = () => {
    let target = 4;
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return i
        } 
    }
    return false
}

console.log("findNumber", findNumber(arr))

