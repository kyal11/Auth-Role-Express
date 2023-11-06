import  express  from "express"
import AuthController from "../controller/auth.js"

const router = express.Router()

router.get('/account', (req, res) => {
    AuthController.getAccount(req, res)
})
router.post('/register', (req, res) => {
    AuthController.Register(req, res)
})
router.post('/login', (req, res) => {
    AuthController.Login(req, res)
})
router.delete('/logout', (req, res) => {
    AuthController.Logout(req, res)
})

export default router