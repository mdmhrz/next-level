// type guard

type AlphaNumeric = number | string;

const add = (a: AlphaNumeric, b: AlphaNumeric) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    else {
        return (`${a}${b}`)
    }
}

// console.log(add(2, 5));
// console.log(add(6, '5'));

//in guard

type NormalUser = {
    name: string
}

type AdminUser = {
    name: string;
    role: 'Admin'
}


const getUserInfo = (user: NormalUser | AdminUser) => {

    if ('role' in user) {

        console.log(
            `This is ${user.name} and his role is ${user.role}`
        );
    } else {
        console.log(
            `Name is  ${user.name}`
        );
    }


}

getUserInfo({ name: "razu", role: "Admin" })


