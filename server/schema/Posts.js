const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const PostSchema = new Schema({

    text: {
        type: String,
        min: 3,
        required: true
         
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    postid: String,
    createdBy: { type: Schema.Types.ObjectId, ref: 'author' },

})

const Post = mongoose.model('Post ', PostSchema);
module.exports = Post;