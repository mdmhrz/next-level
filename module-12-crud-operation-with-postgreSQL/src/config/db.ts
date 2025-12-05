import { Pool } from "pg";
import config from ".";

const pool = new Pool({
  connectionString: config.connection_str,
  ssl: { rejectUnauthorized: false }, // for Neon / Heroku
  connectionTimeoutMillis: 15000,
  idleTimeoutMillis: 120000,
  query_timeout: 30000,
  statement_timeout: 30000,
  max: 10,
  min: 1
});


export const initDB = async (retries = 5) => {
  for (let i = 0; i < retries; i++) {
    try {
      await pool.query('SELECT 1'); // test connection
      console.log("✅ DB connected successfully");

      break;
    } catch (err) {
      console.warn(`⚠️  DB connection attempt ${i + 1}/${retries} failed`);
      if (i < retries - 1) {
        await new Promise(resolve => setTimeout(resolve, 3000)); // wait 3s before retry
      } else {
        console.warn("⚠️  Database unavailable - server running without DB. Reconnecting in background...");
        // Try to reconnect in background every 10 seconds
        setInterval(async () => {
          try {
            await pool.query('SELECT 1');
            console.log("✅ DB reconnected successfully");
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


export default pool;