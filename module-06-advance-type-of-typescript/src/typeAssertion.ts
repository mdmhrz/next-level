let anything: any;

anything = "esbah";

const result = (anything as string).includes("m") ? console.log(true) : console.log(false);;
// console.log(result);




const kgToGramConverter = (input: string | number): string | number | undefined => {
    if (typeof input === "number") {
        const result = (input * 1000);
        console.log(typeof (result), result);
        return result;
    } else if (typeof input === "string") {
        const [value] = input.split(" ");
        const result = (Number(value) * 1000);

        const finalResult = (`Converted output is ${result}`);
        console.log(typeof (finalResult), finalResult);
        return finalResult;
    } else {
        return undefined
    }
}

const result1 = kgToGramConverter(2) as number;
const result2 = kgToGramConverter("2 jgksjd") as string;

