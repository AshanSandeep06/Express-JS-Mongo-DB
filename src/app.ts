import { config } from "dotenv";
// dotenv Configuration
config();
 
 import { log } from "console";
import express from "express";
import db from "mongoose";

// Create the express app
// const app = require(); // ---> JS Way
const app = express();

db.connect(process.env.MONGO_DB_URL!)  // Typescript error eka walakwa ganna agata (!) meka danna ona
// Success method = then
.then(() => {
    console.log("Database is Connected");

    app.listen(process.env.PORT, () => {
        console.log("Server started on port 4000");
    });
    
// Error method = catch
}).catch(() => {
    console.log("Error in connecting to database");
});