import mongoose, { connection } from "mongoose";

export const connectDB = async () => {
    try {
        if (mongoose.connections && mongoose.connections[0].readyState) {
            console.log(`already connected to DB from ${mongoose.connection.host}`)
            return ;
        }
        const {connection} = await mongoose.connect(process.env.MONGO_URI as string, {dbName: "nextauth"});
        console.log(`connected to DB from ${connection.host}`)
    } catch (error) {
        console.log({error})
    }
};