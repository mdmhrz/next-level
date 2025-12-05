import pool from "../../config/db";

// createUser service logics
const createUser = async (name: string, email: string) => {
    const result = await pool.query(
        `INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`, [name, email]);
    return result
}

// get all users service logics
const getAllUser = async () => {
    const result = await pool.query(`SELECT * FROM users`)
    return result;
};

// get single user service logics
const getSingleUser = async (id: number) => {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id])
    return result
}

// update single user service logic
const updateUser = async (name: string, email: string, id: number) => {
    const result = await pool.query(`UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`, [name, email, id])

    return result;
}

const deleteUser = async (id: number) => {
    const result = await pool.query(`DELETE FROM users WHERE id=$1 `, [id]);
    return result
}

export const userServices = {
    createUser, getAllUser, getSingleUser, updateUser, deleteUser
}