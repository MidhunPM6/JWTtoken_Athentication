const ConnectDB = require("./DB/config.js");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const AuthRouter =require('./Routes/AuthRouter.js')
const cookieParser =require('cookie-parser')


 

const app =express()

const port = 5000


app.use(cors({
    origin:"http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }))
  app.use(express.json());
  app.use(cookieParser())


  app.use('/api/auth',AuthRouter)    
  


   




app.listen(port, () => {  
    console.log('Port Running on ' + port );
  }); 