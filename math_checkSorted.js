const arr = [5, 2, 3, 4]


const checkSorted = (arr) => {
    let sorted = true;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            sorted = false
        } 
    }
    return sorted
}

console.log("checkSorted", checkSorted(arr))