// OOP: instance of type guard / type narrowing

class Person {
    name: string;
    constructor(name: string) {
        this.name = name
    }

    getSleep(hour: number) {
        console.log(`${this.name} doinik ${hour} ghumay`);
    }
}

class Students extends Person {
    constructor(name: string) {
        super(name)
    }


    doStudy(hour: number) {
        console.log(`${this.name} daily ${hour} ghonta study kore`);
    }
}


class Teachers extends Person {
    constructor(name: string) {
        super(name)
    }

    takeClass(hours: number) {
        console.log(`${this.name} ${hours} ghonta poray`);
    }

}


//function guard
const isStudent = (user: Person) => {
    return user instanceof Students
}

const getUserInfos = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(10)
    } else if (user instanceof Teachers) {
        user.takeClass(5)
    } else {
        user.getSleep(3)
    }
}


const student3 = new Students('mr. student');
const teache3 = new Teachers('mr teachcer')


getUserInfos(student3)