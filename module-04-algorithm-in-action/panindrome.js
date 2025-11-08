
const isPalindrome = (str) => {
    const normalizeText = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    const reversed = normalizeText.split('').reverse().join("");

    return reversed === normalizeText ? true : false


}

// console.log(isPalindrome('level'));

const isPalindromeTwoPointer = (str) => {
    const normalizeText = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    let left = 0
    let right = normalizeText.length - 1;

    while (left < right) {
        if (normalizeText[left] !== normalizeText[right]) {
            return false
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPalindromeTwoPointer("level"));