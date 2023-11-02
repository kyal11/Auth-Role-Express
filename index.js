import express from "express"
import session from "express-session"
import cors from "cors"
import dotenv from "dotenv"
import userRoute from "./routes/user.routes"
import productRoute from "./routes/product.routes"
dotenv.config()

const app = express()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure:true
    }
}))

app.use(cors({
    credentials: true,
    origin: 'http://localhost:8000'
}))

app.use(express.json())
app.use(userRoute)
app.use(productRoute)
const PORT = process.env.APP_PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})