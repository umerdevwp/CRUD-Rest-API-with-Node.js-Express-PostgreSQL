import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";
import createProductsTable from "./data/createProductsTable.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", userRoutes);

//Error Handeler middleware
app.use(errorHandling);

//Create table before starting server
createUserTable();
createProductsTable();

// Testing POSTGRES Connection
app.get("/", async (req, res) => {
  console.log("Start");
  const result = await pool.query("SELECT current_database()");
  console.log("result", result.rows);
  res.send(`The database name is : ${result.rows[0].current_database}`);
});

// Server
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});