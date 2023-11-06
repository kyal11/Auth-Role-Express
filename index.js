/* eslint-disable no-unexpected-multiline */
import express from "express"
import session from "express-session"
import cors from "cors"
import dotenv from "dotenv"
import userRoute from "./routes/user.routes.js"
import productRoute from "./routes/product.routes.js"
// import db from "./config/db.js"

dotenv.config()

const app = express() 

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// (async()=>{
//     await db.sync();
// })();

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

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
 
app.use(userRoute)
app.use(productRoute)



const PORT = process.env.APP_PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})