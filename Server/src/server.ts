import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import { envVars } from "./app/config/env";

let server: Server

const startServer = async () =>{
    try{
        await mongoose.connect(envVars.DB_URL);
        console.log("Connected to DB");
        server = app.listen(envVars.PORT, () => {
        console.log(`Server started on port ${envVars.PORT}`);
    });
    }catch (error){
        console.log(error)
        process.exit(1)
    }
};
startServer();


