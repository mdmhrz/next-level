// Problem Statement

//* You are given two large arrays, listA and listB, Each array contains user objects.
// A user object is guaranteed to have a unique id property (a string) and may contain other data such as a name

//  Your task is to write an efficient fucntion that takes both lists as input
// and return the total count of users that are present in both lists

//! Do not change anything in data setup part

// -------- Data setup block ---------//
const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` })


for (let i = 0; i < USER_COUNT; i++) {
    usersA.push(createUser(i));
    usersB.push(createUser(i + 25000))
}


// console.log(usersA);
// console.log(usersB);


// Approach 1- Slow way
const commonFriendsSlow = (usersA, usersB) => {

    const startTime = performance.now()

    const commonFriends = []

    //! O(n^2)
    usersA.forEach(userA => {
        usersB.forEach(userB => {
            if (userA.id === userB.id) {
                commonFriends.push(userB)
            }
        })
    })

    const endTime = performance.now()
    const timeTook = endTime - startTime

    return { count: commonFriends.length, timeTook }

}

// console.log(commonFriendsSlow(usersA, usersB));



// Approach 2
const commonFriendsFast = (usersA, usersB) => {

    const startTime = performance.now()

    const commonFriends = []

    // O(n)
    const idList = new Set(usersA.map(user => user.id))
    console.log(idList);

    // O(n)
    usersB.forEach((userB) => {
        // O(1)
        if (idList.has(userB.id)) {
            commonFriends.push(userB)
        }
    })

    const endTime = performance.now()
    const timeTook = endTime - startTime

    return { count: commonFriends.length, timeTook }

}

console.log(commonFriendsFast(usersA, usersB));



