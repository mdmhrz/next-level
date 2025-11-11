// ternary operator: decision making
// nullish coaleascing operator
// optional chaining


const biyerJonnoEligible = (age: number) => {
    // if (age >= 21) {
    //     console.log("You're eligible");
    // } else {
    //     console.log("you're not eligible");
    // }

    const result = age >= 21 ? "You're eligible" : "You're not eligible"
    console.log(result);

}

// biyerJonnoEligible(49)



// nulish coalescing operator: null/undefiend
const userTheme = "dark";
const selectedTheme = userTheme ?? "light theme";

console.log(selectedTheme);



