

console.log("Its running")

const nums = [5, 7, 2, 9, 1, 0];


const findMin = (nums) => {
    let min = nums[0];
    for(let i = 0; i < nums.length; i++){
        if(min > nums[i]){
            min = nums[i]
        }
    }
    return min;
}

console.log("minimum=", findMin(nums));