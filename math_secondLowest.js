// const arr = [7, 1, 2, 3, 4, 5]
const arr = [1]

const findSecondLowest = (arr) => {
    let firstLowest = Infinity
    let secondLowest = Infinity

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < firstLowest){
            console.log(arr[i])
            secondLowest = firstLowest
            firstLowest = arr[i]
        } else if(arr[i] < secondLowest && secondLowest !== firstLowest){
            secondLowest = arr[i]
        }
    }

    return secondLowest

}

console.log("findSecondLowest", findSecondLowest(arr))