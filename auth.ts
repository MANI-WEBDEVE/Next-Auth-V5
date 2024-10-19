import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import UserModel from "./Schemas/userModel";
import bcrypt from "bcryptjs";
import { connectDB } from "./lib/connectDB";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      authorize: async (credentials) => {
        const email = credentials?.email as string | undefined
        const password = credentials?.password as string | undefined
        console.log({email, password})
        if (!email) {
          throw new Error("Email is required")
        } else if (!password) {
          throw new Error("Password is required")
        }
        await connectDB();
        const user = await UserModel.findOne({email}).select('+password')
        if (!user) {
          throw new Error("User not found")
        } 
        if(!user.password) throw new Error("Invalid email or Password")
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
          throw new Error("Invalid email or Password")
        }
         return {name:user.name, email:user.email, id:user.id}
      },
    }),
  ]
});
