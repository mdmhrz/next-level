type User = {
    name: string;
    age: number;
}

type Role = {
    role: "admin" | "user"
}

type UserWithRole = User & Role


interface IUser {
    name: string,
    age: number
}


const user: IUser = {
    name: "Mr. X",
    age: 2000
}




const user2: UserWithRole = {
    name: "Mr. Y",
    age: 2000,
    role: "admin"
}


//interface in function

interface Iadd {
    (num1: number, num2: number): number
}

const add: Iadd = (num1, num2) => {
    return num1 + num2
}