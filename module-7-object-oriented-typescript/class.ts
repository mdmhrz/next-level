// OOP- class - object


//approach 1: beginner

class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        return (`the ${this.name} is making sound ${this.sound}`);
    }
}


//Approach 2: parameter properties
class Animals {
    constructor(public name: string, public species: string, public sound: string) { }

    makeSound() {
        return (`the ${this.name} is making sound ${this.sound}`);
    }
}

const dog = new Animals('dog', 'dog species', 'ghew ghew')

console.log(dog.makeSound());