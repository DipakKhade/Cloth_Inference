
import connecttoMongoDB from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import User from "../../../models/users";

// to match with exsting data (for log in)
// const handler = async (req, res) => {
//   if (req.method == "POST") {
//     console.log(req.body);
//     const user = await User.findOne({"email": req.body.email });
//     if (user) {
//       if (req.body.email ==user.email  &&  req.body.password== user.password ) {
//         return NextResponse.json({ success: true , email:user.email , password:user.password}, { status: 200 });
//       }
//       else{
//         return NextResponse.json({ success: false , error:'invalid Password'}, { status: 200 });
//       }
//     }
//   } else {
//     return NextResponse.json({ success: true , error:"No user found"}, { status: 200 });
//   }
// };

// export default connecttoMongoDB(handler);








// export async function POST(req,res) {
// const {email , password } = await req.json();

// await connecttoMongoDB();
// const u = await Login.findOne({ email: req.body.email });

// return NextResponse.json({ massage: "User added" }, { status: 200 } ,u);
// }


export async function GET(req,res){
      await connecttoMongoDB();
      const users = await User.find();
      console.log(req.body)
      const user = users.email == req.body.email
      console.log(user)

      return NextResponse.json({ users });
    }

    