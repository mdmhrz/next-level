"use strict";
//constraint: strict rules
Object.defineProperty(exports, "__esModule", { value: true });
// extends in generic strictly mention that those property must remain
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
//# sourceMappingURL=constrain.js.map