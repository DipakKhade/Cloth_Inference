import { timeStamp } from "console";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const loginSchema= new Schema(
    {
      
        email:String,
        password:String,
    },
    {
        timeStamp:false,

    }
);

const Login = mongoose.models.Login  ||  mongoose.model("Login",loginSchema)   //User is a collection name

export default Login