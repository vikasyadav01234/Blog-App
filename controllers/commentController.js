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
        //find the post by ID, add the new commment to its comment array
        const udpatedPost = await Post.findByIdAndUpdate(post, {$push:{comments: savedComment._id}},{new: true})
                .populate("comments")//populate the comments array with comment documents
                .exec();
        res.json({
            post: udpatedPost,
        });
    }
    catch(error){

    }
}