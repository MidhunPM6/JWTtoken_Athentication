const mongoose = require('mongoose')


const ConnectDB=()=>{
    mongoose.connect("mongodb://localhost:27017" ,{
        dbName:'JwtDB'
    }).then(() => console.log("MongoDB Connected"))
    .catch((error) =>
      console.error("MongoDB Connection failed:", error.message)
    );
}


ConnectDB()
  
module.exports=ConnectDB 