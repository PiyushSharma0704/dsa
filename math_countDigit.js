// Count Digits

let num = 43345
let count = 0


const countNumbers = (num, count) => {
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count
}

console.log(countNumbers(num, count))