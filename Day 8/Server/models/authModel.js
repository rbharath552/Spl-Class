import mongoose from "mongoose";



const authSchema = new mongoose.Schema({
    username:String,
    userage:Number,
     email:{type:String,unique:true},
    password:String
},{timestamps:true})


const authModle = mongoose.model("taskdatas",authSchema)

export default authModle