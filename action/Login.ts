import { connectDB } from "@/lib/connectDB";
import UserModel from "@/Schemas/userModel";
import { CredentialsSignin } from "next-auth";
// import { signIn } from "next-auth/react";
import { signIn } from "@/auth";

export const Login = async (formData: FormData): Promise<any> => {
  "use server";

  try {
    const email = formData.get("email") as string | undefined;
    const password = formData.get("password") as string | undefined;
    if (!email || !password) {
      return console.log("Both are required");
    }

    await connectDB();
    const findUser = await UserModel.findOne({ email }).lean();
    if (!findUser) {
      return console.log("user not found please SignIN");
    }

    await signIn("credentials", {
      email,
      password,
    });
  } catch (error) {
    const err = error as CredentialsSignin;
    return err.message;
  }

};
