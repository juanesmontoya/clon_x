import mongoose from "mongoose";

const { MONGODB_URI, DB_NAME } = process.env;

export const dbConnection = async () => {
    try {
        mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
        console.log("Connection with database was successful.");
        
    } catch (error) {
        console.log(error);
        throw new Error(
            "[BD_ERROR] Connection with DB was impossible."
        );
        
    }
}