import express from "express"
import userController from "../controller/users.js"

const router = express.Router()


router.get('/users', (req, res) => {
    userController.getUser(req, res);
});
  
router.get('/users/:id', (req, res) => {
    userController.getUserById(req, res);
});

router.post('/users/', (req, res) => {
    userController.createUser(req, res);
});

router.patch('/users/:id', (req, res) => {
    userController.updateUser(req, res);
});

router.delete('/users/:id', (req, res) => {
    userController.deleteUser(req, res);
});

export default router