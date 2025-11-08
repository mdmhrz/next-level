

const twoSum = (arr, target) => {
    const numMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];
        const complement = target - currentNumber;

        if (numMap.has(complement)) {
            return [numMap.get(complement), i]
        }

        numMap.set(currentNumber, i)
    }

    return undefined
}

// console.log(twoSum([2, 11, 7, 15], 9));