//nullable type

const getUser = (input: string | null) => {
    if (input) {
        console.log(`From DB: ${input}`);
    } else {
        console.log("all user");
    }
}

getUser(null)


// unknown type

const discountCalculator = (input: unknown) => {
    if (typeof input === 'number') {
        const discountedPrice = input * 0.1;
        console.log(discountedPrice);
    } else if (typeof input === "string") {
        const normalize = input.split(" ")[0];
        const makeInteger = Number(normalize)
        const discountedPrice = makeInteger * 0.1;
        console.log(discountedPrice);
    } else {
        console.log("wrong input");
    }
}

discountCalculator(49);
discountCalculator("49 TK");
discountCalculator(null)



// void

const throwError = (msg: string): never => {
    throw new Error(msg)
}

throwError("error....")