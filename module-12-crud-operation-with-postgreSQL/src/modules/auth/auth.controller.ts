import { Request, Response, Router } from "express";
import { authServices } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
        const result = await authServices.loginUser(email, password)

        if (result) {
            res.status(200).json({
                success: true,
                message: "login successfully",
                data: result
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


export const authController = {
    loginUser
}