const express = require("express")
const {getPosts} = require("./Routes/Routes") //we import getPost method from our routes folder/module from object destructure 
const morgan = require("morgan")


//app initialization means invoking express
const app = express()

//custom middleware 
const myMiddleware =(req, res, next)=>{
    console.log("hi i am here in the middle of the process to do some task");
}


//middleware 
app.use(morgan("dev"))
app.use(morgan(myMiddleware))



app.get("/", getPosts) //from our custom routes we passed the method into the response arguments of get module
const port = 8080
app.listen(port, ()=>{
        console.log(`A node API is listening on port ${port}`);
})
