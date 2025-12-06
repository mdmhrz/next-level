import express, { Request, Response } from "express";
import { initDB } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/users/user.routes";
import { todoRoutes } from "./modules/todos/todo.routes";
import { authRoutes } from "./modules/auth/auth.routes";

// Middleware
const app = express();

// postgreSQL DB init
initDB();

// Parser
app.use(express.json());

// Root route get method
app.get('/', logger, (req: Request, res: Response) => {
    res.send('Hello World')
});

// users route post method
app.use("/users", userRoutes);
app.use("/todos", todoRoutes);
app.use("/auth", authRoutes)

app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        path: req.path
    })
})

export default app