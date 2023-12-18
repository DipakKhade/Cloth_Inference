import { NextResponse } from "next/server";
import User from "../../../models/users";
import connecttoMongoDB from "../../../lib/mongodb";


// post request for saving users data  (for sign in)
export async function POST(req) {
  const {name , email , hashedpassword } = await req.json();

  await connecttoMongoDB();

  await User.create({ name , email , password: hashedpassword });

  return NextResponse.json({ massage: "User added" }, { status: 200 });
}


// to match with exsting data (for log in)

