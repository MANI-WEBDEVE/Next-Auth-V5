import { connectDB } from "@/lib/connectDB";
import UserModel from "@/Schemas/userModel";
import bcrypt from "bcryptjs";

export const SignUp = async (formData: FormData):Promise<any> => {
    "use server";
    const name = formData.get("name") as string | undefined;
    const email = formData.get("email") as string | undefined;
    const password = formData.get("password") as string | undefined;
    if (!name || !email || !password) {
      throw new Error("Please fill all the fields");
    }

    // connecting the dataBase for checking the user already exist or not
    await connectDB();
    const user = await UserModel.findOne({ email }).lean();
    if (user){
       throw new Error("User already exist");
    } 

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
   
    return {
      name: newUser.name,
      email: newUser.email,
      _id: newUser._id.toString() // Return only serializable data
    };
  };
