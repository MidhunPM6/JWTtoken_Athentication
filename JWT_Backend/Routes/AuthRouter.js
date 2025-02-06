const express = require('express')
const {AuthController, loginController} =require('../Controllers/AuthController')



const router=express.Router();

router.post('/register',AuthController)
router.post('/login',loginController)

module.exports=router   