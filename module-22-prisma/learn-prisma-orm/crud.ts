import { inflate } from "node:zlib";
import { prisma } from "./lib/prisma";


async function run() {

    //create user
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: 'Jhankar Mahbub',
    //         email: 'jhankar@next.com',
    //     }

    // })
    // console.log('Created User:', createUser)

    // const allUsers = await prisma.user.findMany()
    // console.log('All Users:', allUsers)


    //create post
    // const createPost = await prisma.post.create({
    //     data: {
    //         title: 'My First Post',
    //         content: 'This is the content of my first post.',
    //         authorId: 1
    //     }
    // })
    // console.log('Created Post:', createPost)


    //create profile
    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: 'Software Developer from Bangladesh',
    //         userId: 1
    //     }
    // })
    // console.log('Created Profile:', createProfile)


    //retrive all users information
    // const users = await prisma.user.findMany({
    //     // include: {
    //     //     posts: true,
    //     //     profile: true
    //     // }
    //     select: {
    //         posts: true,
    //         profile: true
    //     }
    // })
    // // console.log('all user', users);
    // console.dir(users, { depth: Infinity })


    //update user
    // const updateUser = await prisma.profile.update({
    //     where: { id: 1 },
    //     data: {
    //         bio: 'Senior Software Developer from Bangladesh',
    //         dateOfBirth: new Date('1990-01-01')
    //     },
    //     select: {
    //         id: true,
    //         bio: true,
    //         user: {
    //             select: {
    //                 id: true,
    //                 name: true,
    //                 role: true
    //             }
    //         }
    //     }
    // })
    // console.log('Updated User Profile:', updateUser)


    //delete user
    // const deleteUser = await prisma.user.delete({
    //     where: { id: 2 }
    // })
    // console.log('Deleted User:', deleteUser)


    //get unique user by id
    // const uniqueUser = await prisma.user.findUnique({
    //     where: { id: 2 },
    //     include: {
    //         profile: true,
    //         posts: true
    //     }
    // })
    // console.log('Unique User:', uniqueUser)

    //upsert user
    const upsertUser = await prisma.user.upsert({
        where: { email: 'jhankar@next.com' },
        create: {
            name: 'Jhankar Mahbub 2',
            email: 'jhankar@next.com',
        },
        update: {
            name: 'Jhankar Mahbub 3'
        }
    })
    console.log('Upserted User:', upsertUser)

}

run()