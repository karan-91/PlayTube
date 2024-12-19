import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

/*
import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${import.meta.env.VITE_MONGODB_URL}/${Db_Name}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(import.meta.env.VITE_PORT, () => {
      console.log(`App is listening on port ${import.meta.env.VITE_PORT}`);
    });
  } catch (error) {
    console.log("DB CONNECTION ERROR: ", error);
  }
})();

*/
