import express from "express";
import productController from "../controller/products.js";
import {userVerification} from "../middleware/AuthUser.js";
const router = express.Router();


router.get('/products',userVerification ,(req, res) => {
    productController.getProduct(req, res);
});
  
router.get('/products/:id',userVerification ,(req, res) => {
    productController.getProductById(req, res);
});

router.post('/products',userVerification ,(req, res) => {
    productController.createProduct(req, res);
});

router.patch('/products/:id',userVerification ,(req, res) => {
    productController.updateProduct(req, res);
});

router.delete('/products/:id',userVerification ,(req, res) => {
    productController.deleteProduct(req, res);
});

export default router;