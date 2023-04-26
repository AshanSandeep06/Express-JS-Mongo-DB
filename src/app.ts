import { config } from "dotenv";
// dotenv Configuration
config();

import db from "mongoose";

import routes from "./routes"
import { json, urlencoded } from "body-parser";

import express, { RequestHandler, Request, Response } from "express";

// Create the express app
// const app = require(); // ---> JS Way
const app = express();

// Mount the routes at /resources URL Path
app.use("/", routes);

app.use(json());

app.use(urlencoded({ extended: true }));

app.use((error: Error, req:Request, res: Response) => {
    res.status(500).json({message: res.statusMessage});
});

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