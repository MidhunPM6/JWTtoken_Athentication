const ConnectDB = require("./DB/config.js");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const AuthRouter =require('./Routes/AuthRouter.js')




const app =express()

const port = 5000

app.use(express.json());  
app.use(cors());
cors({
    origin:"http://localhost:3000",
    credentials: true
  })

  app.use('/api/auth',AuthRouter)    


   




app.listen(port, () => {  
    console.log('Port Running on ' + port );
  }); 