import config from "./config";
import express, { Request, Response } from "express";
import pool, { initDB } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/users/user.routes";
import { todoRoutes } from "./modules/todos/todo.routes";

// Middleware
const app = express();
const port = config.port;

// postgreSQL DB connection pool
// DB Init
initDB();

// Parser
app.use(express.json());

// Root route get method
app.get('/', logger, (req: Request, res: Response) => {
  res.send('Hello World')
});

// users route post method
app.use("/users", userRoutes)
app.use("/todos", todoRoutes)




app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path
  })
})

// server listen
app.listen(port, () => {
  console.log(`server is running on port: ${port}`)
});
