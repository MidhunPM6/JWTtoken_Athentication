<<<<<<< HEAD
const { json } = require("express")
const User = require("../Models/AuthRegModel")
const bcrypt =require ('bcrypt')
const cookieParser = require("cookie-parser");
=======
const { json } = require('express')
const User = require('../Models/AuthRegModel')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
>>>>>>> f77eff3 (GoogleCloud Integrated)
const dotenv = require('dotenv')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const { format } = require('util')
const { Storage } = require('@google-cloud/storage')

<<<<<<< HEAD

=======
module.exports.AuthController = async (req, res) => {
  const { name, email, password } = req.body
>>>>>>> f77eff3 (GoogleCloud Integrated)

  const existingUser = await User.findOne({ email: email })

  try {
    if (existingUser) {
      return res.status(404).json({ message: 'User already exsist' })
    }
    const hashpassword = await bcrypt.hash(password, 10)

    const user = new User({
      name: name,
      email: email,
      password: hashpassword
    })
    await user.save()

    res.status(200).json({ message: 'Successfully SignIn' })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Server Error' })
  }
}

module.exports.loginController = async (req, res) => {
  const { email, password } = req.body

  const jwtSecretkey = process.env.JWT_SECRET

  try {
    const finduser = await User.findOne({ email })
    if (!finduser) {
      return res.status(404).json({ message: 'User not found' })
    }

    const isPasswordValid = await bcrypt.compare(password, finduser.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign({ UserID: finduser._id }, jwtSecretkey, {
      expiresIn: '30m'
    })
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'Strict'
    })
    res.status(200).json({ message: 'User logged in', user: finduser })
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
    console.log(error)
  }
}

const storage = new Storage({
  keyFilename: './GoogleKeys.json'
})
const bucket = storage.bucket(
  'workbridgeproject-seekers-profile-pictures-workbridge'
)

<<<<<<< HEAD
        const token= jwt.sign({UserID:finduser._id},jwtSecretkey,{
            expiresIn:'30m'
=======
exports.submitController = (req, res) => {
  try {
    console.log('Received file:', req.file)

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded!' })
    }

    const blob = bucket.file(req.file.originalname)
    const blobStream = blob.createWriteStream({
      resumable: false
    })

    blobStream.on('error', err => {
      console.error('Upload error:', err)
      return res.status(500).json({ message: err.message })
    })

    blobStream.on('finish', async () => {
      try {
        const [url] = await blob.getSignedUrl({
          action: 'read',
          expires: Date.now() + 60 * 60 * 1000
>>>>>>> f77eff3 (GoogleCloud Integrated)
        })
        res.cookie('jwt',token,{
            httpOnly:true,
            secure: false,
            sameSite:"Strict",
        
        })
        res.status(200).json({ message: "User logged in" ,user:finduser});

<<<<<<< HEAD
=======
        return res.status(200).json({
          message: `File uploaded successfully`,
          url: url
        })
      } catch (err) {
        console.error('Failed to generate signed URL:', err)
        return res.status(500).json({
          message: `Uploaded file but could not generate signed URL`,
          error: err.message
        })
      }
    })
>>>>>>> f77eff3 (GoogleCloud Integrated)

    blobStream.end(req.file.buffer)
  } catch (err) {
    console.error('Server error:', err)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

<<<<<<< HEAD
}

exports.logoutController=(req,res)=>{
    
      
        res.clearCookie("jwt", {
          httpOnly: true,  
          secure:false,   
          sameSite: "Strict",
        });
        res.json({ message: "Logged out successfully" });
      
}
=======
exports.logoutController = (req, res) => {
  res.clearCookie('jwt', {
    httpOnly: true,
    secure: false,
    sameSite: 'Strict'
  })
  res.json({ message: 'Logged out successfully' })
}
>>>>>>> f77eff3 (GoogleCloud Integrated)
