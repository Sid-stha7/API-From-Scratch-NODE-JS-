const mongoose = require("mongoose")

// any post has title and body which is compulsory
const postSchema= mongoose.Schema({

    title: {type: String, required: "title is required",},
    body: {type: String, required: "Body is required",},

})

module.exports = mongoose.model("Post", postSchema)