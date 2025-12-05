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
  connectionTimeoutMillis: 15000,
  idleTimeoutMillis: 120000,
  query_timeout: 30000,
  statement_timeout: 30000,
  max: 10,
  min: 1
});

let dbConnected = false;

const initDB = async (retries = 5) => {
  for (let i = 0; i < retries; i++) {
    try {
      await pool.query('SELECT 1'); // test connection
      console.log("✅ DB connected successfully");
      dbConnected = true;
      break;
    } catch (err) {
      console.warn(`⚠️  DB connection attempt ${i + 1}/${retries} failed`);
      if (i < retries - 1) {
        await new Promise(resolve => setTimeout(resolve, 3000)); // wait 3s before retry
      } else {
        console.warn("⚠️  Database unavailable - server running without DB. Reconnecting in background...");
        dbConnected = false;
        // Try to reconnect in background every 10 seconds
        setInterval(async () => {
          try {
            await pool.query('SELECT 1');
            console.log("✅ DB reconnected successfully");
            dbConnected = true;
          } catch (err) {
            // Silent fail, will retry
          }
        }, 10000);
      }
    }
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


// Root route get method
app.get('/', (req: Request, res: Response) => {
  res.send('Hello')
});


// users route post method
app.post("/users", async (req: Request, res: Response) => {
  if (!dbConnected) {
    return res.status(503).json({
      success: false,
      message: "Database temporarily unavailable. Please try again."
    });
  }

  const { name, email } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`, [name, email]);

    console.log(result.rows[0]);
    res.status(201).json({
      success: true,
      message: "Data inserted successfully",
      data: result.rows[0]
    });

  } catch (error: any) {
    console.log(error.message);
    dbConnected = false;
    res.status(500).json({
      success: false,
      message: error.message
    })
  }

});


// users route get method to get all users
app.get("/users", async (req: Request, res: Response) => {
  if (!dbConnected) {
    return res.status(503).json({
      success: false,
      message: "Database temporarily unavailable. Please try again."
    });
  }

  try {
    const result = await pool.query(`SELECT * FROM users`)

    res.status(200).json({
      success: true,
      message: "User retrieve successfully",
      data: result.rows
    })
  } catch (error: any) {
    console.log(error.message);
    dbConnected = false;
    res.status(500).json({
      success: false,
      message: error.message,
      details: error
    })
  }
})


// users route put method for getting single user
app.get("/users/:id", async (req: Request, res: Response) => {
  if (!dbConnected) {
    return res.status(503).json({
      success: false,
      message: "Database temporarily unavailable. Please try again."
    });
  }

  try {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [req.params.id])

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
    dbConnected = false;
    res.status(500).json({
      success: false,
      message: error.message,
      details: error
    })
  }
})



// users route delete method for getting single user
app.put("/users/:id", async (req: Request, res: Response) => {
  if (!dbConnected) {
    return res.status(503).json({
      success: false,
      message: "Database temporarily unavailable. Please try again."
    });
  }

  const { name, email } = req.body

  try {
    const result = await pool.query(`UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`, [name, email, req.params.id])

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
    dbConnected = false;
    res.status(500).json({
      success: false,
      message: error.message,
      details: error
    })
  }
})


app.delete("/users/:id", async (req: Request, res: Response) => {
  if (!dbConnected) {
    return res.status(503).json({
      success: false,
      message: "Database temporarily unavailable. Please try again."
    });
  }


  try {
    const result = await pool.query(`DELETE FROM users WHERE id=$1 `, [req.params.id])

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
    dbConnected = false;
    res.status(500).json({
      success: false,
      message: error.message,
      details: error
    })
  }
})

// ====== TODOS CRUD ======

// Create TODO post method
app.post("/todos", async (req: Request, res: Response) => {
  const { user_id, title } = req.body;
  try {

    // check before post if this userid is exist or not!

    const isExist = await pool.query(`SELECT * FROM users WHERE id = $1`, [user_id]);

    if (isExist.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "Given user id does not exists in users list"
      })
      return
    }

    // console.log(isExist);

    const result = await pool.query(`INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *`, [user_id, title])

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
});


// get all TODOS by get method
app.get("/todos", async (req: Request, res: Response) => {
  if (!dbConnected) {
    return res.status(503).json({
      success: false,
      message: "Database temporarily unavailable. Please try again."
    });
  }

  try {
    const result = await pool.query(`SELECT * FROM todos`)

    res.status(200).json({
      success: true,
      message: "Todos retrieve successfully",
      data: result.rows
    })
  } catch (error: any) {
    console.log(error.message);
    dbConnected = false;
    res.status(500).json({
      success: false,
      message: error.message,
      details: error
    })
  }
})





// server listen
app.listen(port, () => {
  console.log(`server is running on port: ${port}`)
});
