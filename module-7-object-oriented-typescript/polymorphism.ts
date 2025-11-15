// polymorphism: bohurupi

class Persons {
    getSleep() {
        console.log(`I am a normal happy person. I sleep for 8 hours`);
    }
}

class Chatro extends Persons {
    getSleep() {
        console.log(`I am a normal happy person. I sleep for 7 hours`);
    }
}

class NextLevelDeveloper extends Persons {
    getSleep() {
        console.log(`I am a normal happy person. I sleep for 6 hours`);
    }
}


const getSeleepingHours = (param: Persons) => {
    param.getSleep()
}

const personOne = new Persons();
const PersonTwo = new Chatro();
const personThree = new NextLevelDeveloper();


getSeleepingHours(personOne)


class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super()
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super()
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.height * this.width
    }
}


const getArea = (param: Shape) => {
    console.log(param.getArea());
}

const shape1 = new Shape()
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 30)


getArea(shape3)