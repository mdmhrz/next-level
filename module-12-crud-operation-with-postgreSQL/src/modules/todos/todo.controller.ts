import { Request, Response } from "express";
import pool from "../../config/db";
import { userServices } from "../users/user.service";
import { todoServices } from "./todo.service";

const createTodo = async (req: Request, res: Response) => {
    const { user_id, title } = req.body;
    try {

        // check before post if this userid is exist or not!

        const isExist = await userServices.getSingleUser(user_id);

        if (isExist.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "Given user id does not exists in users list"
            })
            return
        }

        // console.log(isExist);

        const result = await todoServices.createTodo(user_id, title)

        res.status(201).json({
            success: true,
            message: "Todo created successfully",
            data: result.rows[0]
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getTodo = async (req: Request, res: Response) => {

    try {
        const result = await todoServices.getTodo()
        res.status(200).json({
            success: true,
            message: "Todos retrieve successfully",
            data: result.rows
        })
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message,
            details: error
        })
    }
}


export const todoControllers = {
    createTodo, getTodo
}