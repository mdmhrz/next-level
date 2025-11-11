

//Unior 
type UserRole = "admin" | "user" | "guest"

const getDashboard = (role: UserRole) => {
    if (role === "admin") {
        return "admin dashboard"
    } else if (role === "user") {
        return "user dashboard"
    } else {
        return "guest dashboard"
    }
}


//intersection

type Employee = {
    id: string;
    name: string;
    phoneNumber: string
}

type Manager = {
    designation: string;
    teamSize: number
}

type EmployeeManager = Employee & Manager;

const chowdhury: EmployeeManager = {
    id: "123",
    name: "chowdhury",
    phoneNumber: "01222",
    designation: "manager",
    teamSize: 30

}