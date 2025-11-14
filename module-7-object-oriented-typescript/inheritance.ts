//Inheritance

class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(sleepHours: number) {
        console.log(`${this.name} ${sleepHours} ghonta ghumai`);
    }
}




class Student extends Parent { }

const student1 = new Student('Razu', 50, 'ctg')
// student1.getSleep(15)



class Teacher extends Parent {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation
    }

    takeClass(hours: number) {
        console.log(`${this.name} ${hours} ghonta poray`);
    }
}

const teacher1 = new Teacher('habu', 40, 'bangladesh', 'sr. teacher')


teacher1.takeClass(6)

