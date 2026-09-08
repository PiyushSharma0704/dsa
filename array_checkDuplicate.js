const arr = [1, 2, 2, 3, 2, 4, 2];

const checkDuplicate = (arr) => {
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        if (seen[num]) {
            return true;
        }

        seen[num] = true;
    }

    return false;
};

console.log(checkDuplicate(arr)); // true