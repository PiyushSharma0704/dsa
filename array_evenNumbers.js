
// Count Even Numbers
console.log("Its running")

// const nums = [5, 7, 2, 9, 1, 0];
const nums = [1, 2, 3, 4, 5, 6];
const findEven = (nums) => {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        console.log("nums", nums[i])
        if(nums[i] % 2 == 0){
            count++
        }
    }

    return count

}

console.log("Even No=", findEven(nums))