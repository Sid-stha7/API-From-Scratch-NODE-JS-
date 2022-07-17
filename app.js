const express = require("express")
const postRoutes = require("./Routes/Routes") 
const morgan = require("morgan")
const dotenv = require("dotenv") //we need dot env to access the env file
const mongoose =require("mongoose")
const bodyparser = require("body-parser")
//invoking dotenv config()
dotenv.config()

//cofig database 

mongoose.
        connect
        (process.env.MONGO_URI,
         {useNewUrlParser : true})
                .then(()=> console.log("connected to database succefully"))

mongoose.connection.on('err', err=>{
        console.log(`db connection error ${err.mesage}` );
})
//app initialization means invoking express
const app = express()



//middleware 
app.use("/", postRoutes)
app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))
app.use(express.json());
 //from our custom routes we pointed to the route then that route again points to the controller and that controller performes 
 // based on that request 


 //port initialization 
const port = process.env.PORT || 8080
app.listen(port, ()=>{
        console.log(`A node API is listening on port ${port}`);
})
