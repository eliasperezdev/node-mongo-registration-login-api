import express from "express"

const app = express()

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