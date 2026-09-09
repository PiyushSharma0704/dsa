

// Check Palindrome

let num = 121;
let originalNum = num;
let reverse = 0;

while (num > 0){
    let lastDigit = num % 10;
    reverse =  reverse * 10 + lastDigit;
    num = Math.floor(num/10)
}

if(originalNum === reverse){
    console.log("Palindrome Nuumbeer")
} else {
    console.log("Not a pallindrom Nuumbeer")
}
