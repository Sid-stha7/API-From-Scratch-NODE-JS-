const express = require("express")
const postRoutes = require("./Routes/Routes") 
const morgan = require("morgan")


//app initialization means invoking express
const app = express()




//middleware 
app.use("/", postRoutes)
 //from our custom routes we pointed to the route then that route again points to the controller and that controller performes 
 // based on that request 

 const port = 8080
app.listen(port, ()=>{
        console.log(`A node API is listening on port ${port}`);
})
