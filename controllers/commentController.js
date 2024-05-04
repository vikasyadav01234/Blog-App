//import model
const Post = require("../models/postModel");
const Comment = require("../models/commetModel");

//business logic
exports.createComment = async (req, res) => {
    try{
        //fetch data from req body
        const {post, user, body} = req.body;
        //create a comment objects
        const comment = new Comment({
            post,user,body
        });
        //save the new comment into the database
        const saveComment = await comment.save();
    }
    catch(error){

    }
}