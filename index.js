import express from "express"
import dotenv from 'dotenv'
import connectDB from "./src/config/index.js"
import cors from 'cors'

const app = express()

dotenv.config()
connectDB()

//Cors
const whiteList = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function(origin, callback) {
        if(whiteList.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error("Err cors"))
        }
    }
}

app.use(cors(corsOptions))

//Routing



const PORT = process.env.PORT || 4000
app.listen(PORT,  ()=> {
    console.log(`Server running on port ${PORT}`);
})