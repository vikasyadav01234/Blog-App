//import Mongoose
const mongoose = require("mongoose");

//route Handler

//route handler
const commentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    body: {
        type:String,
        required:true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId
    }]
});