// keyof: type operator

type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string
}

type MyVehicle = 'bike' | 'car' | 'cng'
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = "bike"

type User = {
    id: number;
    name: string;
    address: {
        city: string
    }
}

const user: User = {
    id: 222,
    name: "mobarak",
    address: {
        city: "ctg"
    }
}

const myId = user.id;
const myID = user["id"];


const getPropretyFromObject = <X>(obj: X, key: keyof X) => {
    return obj[key]
}

const result = getPropretyFromObject(user, "name");
console.log(result);


const student = {
    id: 11,
    class: "four",
    city: "dhaka"
}

const result2 = getPropretyFromObject(student, "class")
console.log(result2);