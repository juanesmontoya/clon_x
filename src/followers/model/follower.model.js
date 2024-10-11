import mongoose from "mongoose";

const followerSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
        required: true
    },
    follower:{
        type: String,
        required: true,
        trim: true,
        required: true
    }
})