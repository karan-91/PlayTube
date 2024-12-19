import mongoose from "mongoose";
import { Db_Name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL} / ${Db_Name}`
    );
    console.log(`\n MongoDB connection !! DB HOST : ${connectionInstance}`);
  } catch (error) {
    console.log("MONGODB Connection error : ", error);
    process.exit(1);
  }
};

export default connectDB;
