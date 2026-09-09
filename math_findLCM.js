// Find LCM

let a = 12;
let b = 18;

let x = a;
let y = b;

while(b !== 0){
    let remainder = a%b;
    a = b;
    b = remainder
}

let gcd = a;

let lcm = (x * y)/gcd





console.log("LCM is: ", lcm)