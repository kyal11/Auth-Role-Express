import express from "express"
import session from "express-session"
import cors from 'cors'


const app = express()


const PORT = process.env.APP_SERVER || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})