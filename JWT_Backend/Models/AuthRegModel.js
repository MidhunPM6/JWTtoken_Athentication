const mongoose = require('mongoose')

const AuthSchema=new mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    email : {
        type: String,
        required :true,
        unique :true
    },

    password : {
         type:String,
         required:true
    },
    urlprofile : {
     type:String,
    }
})
const User = mongoose.model('User', AuthSchema)


module.exports=User
