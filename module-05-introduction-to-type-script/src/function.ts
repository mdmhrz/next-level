// Function

// arow function, normal function

function add(number1: number, number2: number): number {
    return number1 + number2
}

add(2, 3)

const calculate = (num1: number, num2: number): number => num1 + num2


//object => function =>  method
const poorUser = {
    name: "Mobarak",
    balance: 0,
    addBalance(value: number) {
        const totalBalance = this.balance + value
        return totalBalance;
    }
}

poorUser.addBalance(500);




// array

const arr: number[] = [1, 2, 3]

const sqrArray = arr.map((element: number): number => element * element) 

