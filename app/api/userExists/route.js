
import User from "../../../models/users";
import connecttoMongoDB from "../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
       await connecttoMongoDB()
        const {email} = await req.json();
        const user = await User.findOne({email}).select("_id");
        return NextResponse.json({user})
    } catch (error) {
        console.log(error)
    }
}