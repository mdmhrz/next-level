// dynamically generalize:generic
type GenericArray<T> = Array<T>

//string[] in call in two way, both are same.
// 1.  const friends: string[] = ['mr. x', 'mr.y', 'mr. z'];
const friends: GenericArray<string> = ['mr. x', 'mr.y', 'mr. z'];


// const rollNumbers: number[] = [2, 3, 4,]
const rollNumbers: GenericArray<number> = [2, 3, 4,]

const isEligibleList: GenericArray<boolean> = [true, false, true]

type UserDetails = { name: string; age: number }

const users: GenericArray<UserDetails> = [
    { name: "razu", age: 30 },
    { name: "rayhan", age: 30 }
]
