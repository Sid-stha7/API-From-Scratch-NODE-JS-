const Post = require("../models/post")

exports.getPosts = (req, res)=>{
    
    res.json({
        posts:[
                {title: "First Post"},{title:"Second Post"}
    ]
})

}
//he route will point to te controller to a specific url or request made by user 
//since we are building an api we will work with json format data



//we will be creating a creatpost so whenever user give data from frontend it should call the create post function through route

exports.createPost= (req,res)=>{
    const post = new Post(req.body)
    console.log(req.body)
    post.save((err,result)=>{
        if (err) {
            return res.status(400).json({
                error:err
            })
        }
        return res.status(400).json({
            post: result
        })
    })
}