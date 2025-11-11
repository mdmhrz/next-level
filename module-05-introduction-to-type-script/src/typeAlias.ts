type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    }
    gender: "male" | "female";
    contactNumber: string;
    address: {
        division: string;
        city: string;
    }
}



const user1: User = {
    id: 123,
    name: {
        firstName: "Mobarak",
        lastName: "hossain"
    },
    gender: "male",
    contactNumber: "01824975616",
    address: {
        division: "Chattogram",
        city: "Chattogram"
    }
}



const user2: User = {
    id: 123,
    name: {
        firstName: "Mobarak",
        lastName: "hossain"
    },
    gender: "male",
    contactNumber: "01824975616",
    address: {
        division: "Chattogram",
        city: "Chattogram"
    }
}

//type alias for function
type AddFunc = (number1: number, number2: number) => number;

const add: AddFunc = (number1, number2) => number1 + number2