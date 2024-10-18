import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    passwor:{
        type:String,
        select:false
    },
    googleId: {
        type:String
    }
   
})

const UserModel = mongoose.models?.UserModel || mongoose.model('UserModel',User)
export default UserModel