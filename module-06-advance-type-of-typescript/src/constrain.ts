//constraint: strict rules

// extends in generic strictly mention that those property must remain
const admission = <T extends { id: number; name: string }>(studentInfo: T) => {
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



