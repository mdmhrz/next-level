"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createArrayWithString = (value) => [value];
const createArrayWithNumber = (value) => [value];
const createArrayWithUserObj = (value) => { value; };
const createArrayWithGeneric = (value) => {
    return [value];
};
const arrString = createArrayWithString("apple");
const arrNumber = createArrayWithNumber(222);
const arrObj = createArrayWithUserObj({ id: 23, name: "hena" });
const genericFunction = createArrayWithGeneric({ id: 40, name: "razu" });
//tuple
const createArrayWithTuple = (param1, param2) => [param1, param2];
const createArrayTupleWithGeneric = (param1, param2) => {
    return [param1, param2];
};
const example1 = createArrayTupleWithGeneric("Razu", false);
//last example
const admission = (studentInfo) => {
    return {
        course: "Next Level",
        ...studentInfo
    };
};
const student1 = {
    id: 123,
    name: "rakib",
    hasPen: true
};
const student2 = {
    id: 321,
    name: "Shamim",
    hasCar: true,
    isMarried: true
};
const result = admission(student2);
// console.log(result);
console.log(result);
//# sourceMappingURL=genericFunction.js.map