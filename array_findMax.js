

console.log("Its running")
// const nums = [1, 2, 3, 4, 6, 8, 10]
const nums = [-10,-5,-20]

const findMax = (nums) => {
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        console.log("nums[i]", nums[i])
        if(max < nums[i]){
            max = nums[i]
        }
    }
    console.log("max=", max)
}

findMax(nums)