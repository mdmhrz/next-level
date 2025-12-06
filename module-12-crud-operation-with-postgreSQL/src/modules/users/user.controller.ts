import { Request, Response } from "express";
import pool from "../../config/db";
import { userServices } from "./user.service";


// create user
const createUser = async (req: Request, res: Response) => {

    try {
        const result = await userServices.createUser(req.body)

        console.log(result.rows[0]);
        res.status(201).json({
            success: true,
            message: "Data inserted successfully",
            data: result.rows[0]
        });

    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//get all user
const getUser = async (req: Request, res: Response) => {

    try {
        const result = await userServices.getAllUser()

        res.status(200).json({
            success: true,
            message: "User retrieve successfully",
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

// get single user
const singleUser = async (req: Request, res: Response) => {

    try {
        const result = await userServices.getSingleUser(req.params.id as string)

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User not found"
            })
        } else {
            res.status(200).json({
                success: true,
                message: "User retrived successfully",
                data: result.rows[0]
            })
        }
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message,
            details: error
        })
    }
};

//update single user
const updateUser = async (req: Request, res: Response) => {

    const { name, email } = req.body

    try {
        const result = await userServices.updateUser(name, email, req.params.id!)

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User not found"
            })
        } else {
            res.status(200).json({
                success: true,
                message: "User updated successfully",
                data: result.rows[0]
            })
        }
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message,
            details: error
        })
    }
}

// Delete User
const deleteUser = async (req: Request, res: Response) => {

    try {
        const result = await userServices.deleteUser(req.params.id as string)

        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: "User not found"
            })
        } else {
            res.status(200).json({
                success: true,
                message: "User deleted successfully",
                data: null
            })
        }
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message,
            details: error
        })
    }
}

export const userControllers = {
    createUser, getUser, singleUser, updateUser, deleteUser
}