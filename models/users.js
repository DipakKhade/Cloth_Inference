
import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema= new Schema(
    {
        name:{
            type:String ,
            required :true
        },
        email:{
            type:String ,
            required :true
        },
        password:{
            type:String ,
            required :true
        },
    },
    {
        timeStamp:true,              //to save the time at which data is added

    }
);

const User = mongoose.models.User  ||  mongoose.model("User",userSchema)   //User is a collection name

export default User 