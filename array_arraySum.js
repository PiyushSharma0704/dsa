console.log("Its running")
const nums = [1, 2, 3, 4]

// const printNums = (nums) => {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         console.log(nums[i]);
//         sum = sum + nums[i]
//     }
//     console.log("sum=", sum)
// }


const printNums = (nums) => {
    let total = 0;
    for(let i = 0; i < nums.length; i++){
        total = total + i;
    }

}

printNums(nums)