import mongoose from "mongoose";

const connectDb = async ()=>{
     try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongoDb connect successfully");
        
     } catch (error) {
        console.log("some error in db");
        
     }
}

export default connectDb;