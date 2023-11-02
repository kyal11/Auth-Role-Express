import express from "express"
import session from "express-session"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(session({
    secret: process.env.SEESION_SECRET,
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

const PORT = process.env.APP_PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})