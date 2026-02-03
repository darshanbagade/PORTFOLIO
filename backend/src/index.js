// for creating the server -> express
import express from "express"
import {visitRouter} from "./routes/visitRoute.js"
import { contactRouter } from "./routes/contactRouter.js";
import connectDB from "./configs/connectDB.js";

const app = express();//execution


connectDB();


app.use(express.json());
app.get("/",(req,res)=>{res.json({
    msg: "API is working"
})
})



app.use("/api/",visitRouter);
app.use("/api/v1",contactRouter);


const PORT = 3000;//window 
app.listen(PORT , ()=>{
    console.log(`Server is running on port  : ${PORT} `)
})
