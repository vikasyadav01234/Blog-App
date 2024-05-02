//import Mongoose
const mongoose = require("mongoose");

//route handler
const commentSchema new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
    }
})