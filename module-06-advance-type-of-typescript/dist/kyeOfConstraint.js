"use strict";
// keyof: type operator
Object.defineProperty(exports, "__esModule", { value: true });
const myVehicle = "bike";
const user = {
    id: 222,
    name: "mobarak",
    address: {
        city: "ctg"
    }
};
const myId = user.id;
const myID = user["id"];
const getPropretyFromObject = (obj, key) => {
    return obj[key];
};
const result = getPropretyFromObject(user, "name");
console.log(result);
const student = {
    id: 11,
    class: "four",
    city: "dhaka"
};
const result2 = getPropretyFromObject(student, "class");
console.log(result2);
//# sourceMappingURL=kyeOfConstraint.js.map