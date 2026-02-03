import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
    name:{
        type: String,
        default : "portfolio"
    },
    visits:{
        type : Number,
        default : 0  
    }
})

const VisitModel = mongoose.model('Visit',visitorSchema);
export {
    VisitModel
}