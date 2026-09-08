// Count Frequency

const arr = [1, 2, 2, 3, 1, 4, 2];

const findFrequency = (arr) => {
    let frequency = {};
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        console.log("num", num)
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }
    return frequency;
}



console.log("findFrequency", findFrequency(arr))