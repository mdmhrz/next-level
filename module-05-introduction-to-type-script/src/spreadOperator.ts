const friends = ["Rahim", "Karim", "Joshim"];
const schoolFriends = ["Arif", "Rihan", "Abir"];
const collegeFriends = ["Rayhan", "Mamun", "Monir"];

friends.push(...collegeFriends, ...schoolFriends)

// console.log(friends);

//rest operator

const sendInvite = (...bondhu: string[]) => {

    bondhu.forEach((friend: string) => console.log(`Send Invitation to ${friend}`))
}


sendInvite("Pintu", "Jhintu", "Joshim");