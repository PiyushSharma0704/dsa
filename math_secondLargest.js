// Second Largest

const arr = [12, 35, 1, 10, 34, 1]

// const findSecondLargest = (arr) => {
//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity
//     for (let i = 0; i < arr.length; i++) {
//         console.log("i", i)
//         if (firstLargest < arr[i]) {
//             firstLargest = arr[i]
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > secondLargest && arr[i] !== firstLargest) {
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest

//     console.log("firstLargest", firstLargest)
//     console.log("secondLargest", secondLargest)


// }


const findSecondLargest = (arr) => {
    let firstLargest = -Infinity
    let secondLargest = -Infinity

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest
            firstLargest = arr[i]
        } else if(arr[i] > secondLargest && arr[i] !== firstLargest){
            secondLargest = arr[i]
        }
    } 
    return secondLargest;
}


console.log("findSecondLargest", findSecondLargest(arr))





















