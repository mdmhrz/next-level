import Stack from "./stack.js";

// Problem Statement

// Given a string containing just the characters,
// Determine if the input string is valid


const bracketChecker = (str) => {
    const stack = new Stack()

    const bracketMap = {
        ")": "(",
        "}": "{",
        "]": "["
    }


    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === "(" || char === "{" || char === "[") {
            stack.push(char)
        } else if (char === ")" || char === "}" || char === "]") {
            if (stack.isEmpty() || stack.pop() !== bracketMap[char]) {
                return false
            }
        }



    }

    return stack.isEmpty()


}

console.log(bracketChecker("[{()}]"));