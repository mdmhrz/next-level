import pool from "../../config/db"

// Create a todo service logics
const createTodo = async (id: number, title: string) => {
    const result = await pool.query(`INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *`, [id, title]);
    return result;
}


// get all todo service logics
const getTodo = async () => {
    const result = await pool.query(`SELECT * FROM todos`)
    return result;
}


export const todoServices = {
    createTodo, getTodo
}