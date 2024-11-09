import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import validateUser from "../middlewares/inputValidator.js";

import { 
  createProduct, 
  deleteProduct, 
  getAllProducts, 
  getProductById, 
  updateProduct   
} from "../controllers/productController.js";
import validateProduct from "../middlewares/productValidator.js";

const router = express.Router();

// User Routers
router.post("/user", validateUser, createUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id", validateUser, updateUser);
router.delete("/user/:id", deleteUser);

// Product Routers
router.post("/product", validateProduct, createProduct);
router.get("/products", getAllProducts);
router.get("/product/:id", getProductById);
router.put("/product/:id", validateProduct, updateProduct);
router.delete("/product/:id", deleteProduct);


export default router;