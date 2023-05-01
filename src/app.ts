import { config } from "dotenv";
// dotenv Configuration
config();

import express, { RequestHandler, Request, Response } from "express";
import db from "mongoose";
import routes from "./routes"
import { json, urlencoded } from "body-parser";

// Create the express app
// const app = require(); // ---> JS Way
const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

// Mount the routes at /resources URL Path
// ena hama request ekkma default mapping eka set krla e requests tika index.ts ekata forward krnw.
// index.ts eken balala adala controllers waalata requests forward krnw.
app.use("/", routes);

// backend eken error ekk awoth apita awshya widihata status code eka saha message ekk ywanna puluwn.
// me method eka use krla.
app.use((error: Error, req: Request, res: Response) => {
    res.status(500).json({ message: error.message });
  });

// Typescript error eka walakwa ganna agata (!) meka danna ona
db.connect(process.env.MONGO_DB_URL!)
// Success method = then
.then(() => {
    console.log("Database is Connected");

    app.listen(process.env.PORT, () => {
        console.log(`Server started on port ${process.env.PORT}`);
    });
    
// Error method = catch
}).catch(() => {
    console.log("Error in connecting to database");
});