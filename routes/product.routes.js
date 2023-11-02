import express from "express"
import productController from "../controller/products"

const router = express.Router()
const controller = new productController()

router.get('/products', (req, res) => {
    controller.getUser(req, res);
});
  
router.get('/products/:id', (req, res) => {
    controller.getProductById(req, res);
});

router.post('/products/:id', (req, res) => {
    controller.createProduct(req, res);
});

router.put('/products/:id', (req, res) => {
    controller.updateProduct(req, res);
});

router.delete('/products/:id', (req, res) => {
    controller.deleteProduct(req, res);
});

export default router