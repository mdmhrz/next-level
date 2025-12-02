import express, { Request, Response } from "express"
import { Pool } from "pg"
import 'dotenv/config';


const app = express()
const port = 5000

// postgreSQL DB connection pool
const pool = new Pool({
  connectionString: process.env.PG_CONNECTION_STRING
})

const initDB = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      age INT,
      phone VARCHAR(15),
      address TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
    `)
}

initDB()



// Parser
app.use(express.json())
// app.use(express.urlencoded())



app.get('/', (req: Request, res: Response) => {
  res.send('Hello Next Level World!')
})

app.post("/", (req: Request, res: Response) => {
  // console.log(req.body);
  res.status(500).json({
    success: true,
    message: "API is working"
  })
})

app.listen(port, () => {
  console.log(`server is running on port: ${port}`)
})
