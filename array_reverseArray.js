// Rotate an array using two pointer approach

let arr = [1, 2, 3, 4, 5]
let start = 0;
let end = arr.length -1;

function reverseArray(arr, start, end) {
    while(start < end){

    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
    }
}

let k =2;
k = k % arr.length;
// LEFT REVERSE
// reverseArray(arr, start, k-1)
// reverseArray(arr, k, arr.length-1)
// reverseArray(arr, start, arr.length-1)

// Right REVERSE
reverseArray(arr, start, arr.length-1)
reverseArray(arr, start, k-1)
reverseArray(arr, k, arr.length-1)


console.log(arr)