import mongoose from "mongoose";

const followerSchema = new mongoose.Schema({
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
}, {
    timestamps:true
})

export default mongoose.model('Follower', followerSchema);