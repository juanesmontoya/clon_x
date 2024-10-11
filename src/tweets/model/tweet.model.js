import mongoose from "mongoose";

const tweetSchema = mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model('Tweet', tweetSchema)