const createArrayWithString = (value: string) => [value];
const createArrayWithNumber = (value: number) => [value];
const createArrayWithUserObj = (value: { id: number; name: string }) => { value };

const createArrayWithGeneric = <T>(value: T) => {
    return [value]
}




const arrString = createArrayWithString("apple");
const arrNumber = createArrayWithNumber(222);
const arrObj = createArrayWithUserObj({ id: 23, name: "hena" })


const genericFunction = createArrayWithGeneric({ id: 40, name: "razu" })



//tuple

const createArrayWithTuple = (param1: string, param2: string) => [param1, param2]


const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => {
    return [param1, param2]
}


const example1 = createArrayTupleWithGeneric("Razu", false)



//last example

const admission = <T>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo
    }
}


const student1 = {
    id: 123,
    name: "rakib",
    hasPen: true
}

const student2 = {
    id: 321,
    name: "Shamim",
    hasCar: true,
    isMarried: true
}



const result = admission(student2);
// console.log(result);
console.log(result);



