const express = require('express')
const {AuthController, loginController,logoutController} =require('../Controllers/AuthController');
const { verifyToken } = require('../Middlewares/VerifyToken');




const router=express.Router();

router.post('/register',AuthController)
router.post('/login',loginController)
router.post('/logout',verifyToken,logoutController)

module.exports=router     