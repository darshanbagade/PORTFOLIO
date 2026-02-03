
import { VisitModel } from "../models/visit.js";


const countVisit = async (req,res)=>{

    try {
        let data = await VisitModel.findOne({name:"portfolio"});

        if(!data){
            data = await VisitModel.create({visits:1})
        }else{
            data.visits += 1;
            await data.save();
        }

        // console.log("CountVisit is working")
        res.status(200).json(
        data.visits
        );
    } catch (error) {
        res.status(400).json({
            msg:error.message
        })
    }
}

export {
    countVisit
}