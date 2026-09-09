// find second largest with a single loop

let arr = [10, 20, 40, 50 , 70]
let highest = -Infinity;
let secondHighest = +Infinity;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > highest){
        secondHighest = highest;
        highest = arr[i];
    } else if( arr[i] > secondHighest && arr[i] !== highest ){
        secondHighest = arr[i]
    }
}

console.log("secondHighest", secondHighest)