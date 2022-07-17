
exports.getPosts = (req, res)=>{
    
    res.json({
        posts:[
                {title: "First Post"},{title:"Second Post"}
    ]
})

}
//he route will point to te controller to a specific url or request made by user 

//since we are building an api we will work with json format data