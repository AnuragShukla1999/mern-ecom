import express from "express";
import { getProduct } from "../controllers/product/getProduct";
import { saveProduct } from "../controllers/product/saveProduct";
import { updateProduct } from "../controllers/product/updateProduct";
import { deleteProduct } from "../controllers/product/deleteProduct";
import { searchProduct } from "../controllers/product/searchProduct";

const routerProduct = express.Router();


routerProduct.get('/', getProduct);
routerProduct.post('/save', saveProduct);
routerProduct.put("/update", updateProduct);
routerProduct.delete('/delete', deleteProduct);
routerProduct.get('/search', searchProduct);

export default routerProduct;