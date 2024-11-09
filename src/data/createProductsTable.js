import pool from "../config/db.js";

const createProductsTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(100) UNIQUE NOT NULL,
    price NUMERIC(15,6) NOT NULL,
    stock VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)
    `;

  try {
    pool.query(queryText);
    console.log("Products table created if not exists");
  } catch (error) {
    console.log("Error creating users table : ", error);
  }
};

export default createProductsTable;