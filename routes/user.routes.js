import express from "express"
import userController from "../controller/users"

const router = express.Router()
const controller = new userController()

router.get('/users', (req, res) => {
    controller.getUser(req, res);
});
  
router.get('/users/:id', (req, res) => {
    controller.getUserById(req, res);
});

router.post('/users/:id', (req, res) => {
    controller.createUser(req, res);
});

router.put('/users/:id', (req, res) => {
    controller.updateUser(req, res);
});

router.delete('/users/:id', (req, res) => {
    controller.deleteUser(req, res);
});

export default router