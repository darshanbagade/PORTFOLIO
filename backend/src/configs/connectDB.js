import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("Database Connected...")
    }catch(err){
        console.log("Error : ", err);
    }
}
export default connectDB;