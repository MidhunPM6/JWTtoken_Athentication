const { json } = require("express")
const User = require("../Models/AuthRegModel")
const bcrypt =require ('bcrypt')

const dotenv = require('dotenv')
require('dotenv').config()
const jwt =require( 'jsonwebtoken')

 


module.exports.AuthController=async(req,res)=>{
    const {name,email,password}=req.body
    
    const existingUser=await User.findOne({email:email}

    )

    try {
        
        if(existingUser){
            return res.status(404).json({message: 'User already exsist'})
        }
          const hashpassword = await bcrypt.hash(password, 10) 
         
        const user=new User({
            name: name,
            email: email,
            password: hashpassword,
        })
       await user.save()

       res.status(200).json({message:'Successfully SignIn'})

    } catch (error) {
        console.log(error)
        res.status(400).json({message:'Server Error'})
    }


}



module.exports.loginController=async(req,res)=>{
    const {email,password} =req.body

    const jwtSecretkey=process.env.JWT_SECRET

    
   

    try {
        const finduser=await User.findOne({email})
        if(!finduser ){
            return res.status(404).json({message:"User not found"})
        }
       
        const isPasswordValid = await bcrypt.compare(password, finduser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token= jwt.sign({UserID:finduser._id},jwtSecretkey,{
            expiresIn:'1h'
        })

        res.status(200).json({ message: "User logged in" ,token,user:finduser});

    } catch (error) {
        
        res.status(500).json({message: "Server Error"})
        console.log(error);
        
    }
   

}