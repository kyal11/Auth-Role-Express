import express from "express";
import userController from "../controller/users.js";
import {userVerification, onlyAdmin} from "../middleware/AuthUser.js";
const router = express.Router();


router.get('/users',userVerification, onlyAdmin, (req, res) => {
    userController.getUser(req, res);
});
  
router.get('/users/:id',userVerification, onlyAdmin, (req, res) => {
    userController.getUserById(req, res);
});

router.post('/users/',userVerification, onlyAdmin, (req, res) => {
    userController.createUser(req, res);
});

router.patch('/users/:id',userVerification, onlyAdmin, (req, res) => {
    userController.updateUser(req, res);
});

router.delete('/users/:id',userVerification, onlyAdmin, (req, res) => {
    userController.deleteUser(req, res);
});

export default router;