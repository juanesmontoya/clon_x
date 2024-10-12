import mongoose from "mongoose";

const { MONGODB_URI} = process.env;

export const dbConnection = async () => {
    try {
        await mongoose.connect(`${MONGODB_URI}`);
        console.log("Connection with database was successful.");
    } catch (error) {
        console.log(error);
        throw new Error(
            "[BD_ERROR] Connection with DB was impossible."
        );
        
    }
}