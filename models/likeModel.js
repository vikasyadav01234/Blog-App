//import Mongoose
const mongoose = require("mongoose");

//route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "POST", //reference to the post model
    },
    user: {
        type:String,
        required:true,
    },
    
});

//export 
module.exports = mongoose.model()