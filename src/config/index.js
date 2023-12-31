import mongoose from 'mongoose'
import dotenv from 'dotenv'

const connectDB = async () => {
    try {
        const connection= await mongoose.connect(
            process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology:true
        })

        const url = `${connection.connection.host}: ${connection.connection.host}`
        console.log(`MongoDb connect ${url}`);
   
    } catch (error) {
        console.log(error);
        process.exit(1)
    }

}

export default connectDB