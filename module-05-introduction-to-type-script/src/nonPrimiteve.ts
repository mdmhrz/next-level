
// String type
let bazarList: string[] = ["Alu", "dal", "Chal"];


bazarList.push("hello")

console.log(bazarList);


// Mixed type for string and number
const mixedArray: (string | number)[] = ["eggs", 12, "milk", 1, "sugar", 2]

mixedArray.push("helo");

// Touple type
let coordinates: [number, number] = [20, 30]


// Touple type 
let couple: [string, string] = ["Husband", "Wife"]


// Reference type object
const user:
    {
        firstName: string;
        middleName?: string; //Optional type declaration
        lastName: string;
        isMarried: boolean;
        ogranization: "Xgenious"; //literal type declaration, value as type
        readonly location: string; // access modifier type
    } =
{
    firstName: "Mobarak",
    lastName: "Razu",
    isMarried: true,
    ogranization: "Xgenious",
    location: "Banasree, Rampura, Dhaka"
}


user.middleName = "Hossain";
// user.ogranization = "Programming hero" // wrong way to assign

console.log(user);
