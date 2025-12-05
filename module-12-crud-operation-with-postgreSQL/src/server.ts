import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { Pool } from "pg";
import path from "path";


dotenv.config({ path: path.join(process.cwd(), ".env") });


const app = express();
const port = 5000;

// postgreSQL DB connection pool
const pool = new Pool({
  connectionString: process.env.PG_CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }, // for Neon / Heroku
  connectionTimeoutMillis: 20000,
  idleTimeoutMillis: 30000
});


const initDB = async () => {
  try {
    await pool.query('SELECT 1'); // test connection
    console.log("DB connected successfully");
  } catch (err) {
    console.error("DB connection failed:", err);
    return; // stop further queries if DB unreachable
  }

  try {
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
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS todos(
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id) ON DELETE CASCADE,
        title VARCHAR(200) NOT NULL,
        description TEXT,
        completed BOOLEAN DEFAULT false,
        due_date DATE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `);

    console.log("Tables created successfully");

  } catch (err) {
    console.error("Table creation failed:", err);
  }
};



initDB();



// Parser
app.use(express.json());



app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello</h1>')
});

app.post("/users", async (req: Request, res: Response) => {
  console.log(req.body);
  const { name, email } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`, [name, email]);

    // console.log(result.rows[0]);
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

  res.status(500).json({
    success: true,
    message: "API is working"
  })
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`)
});
