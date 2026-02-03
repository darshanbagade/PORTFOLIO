// for creating the server -> express
import express from "express"
import cors from "cors"
import {visitRouter} from "./routes/visitRoute.js"
import { contactRouter } from "./routes/contactRouter.js";
import connectDB from "./configs/connectDB.js";
import dotenv from "dotenv"
dotenv.config();

const app = express();//execution


connectDB();


app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{res.json({
    msg: "API is working"
})
})

app.use("/api/",visitRouter);
app.use("/api/v1",contactRouter);


const PORT = process.env.PORT || 3000 ;//window 
app.listen(PORT , ()=>{
    console.log(`Server is running on port  : ${PORT} `)
})
