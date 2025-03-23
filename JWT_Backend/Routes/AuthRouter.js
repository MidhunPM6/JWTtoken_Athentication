const express = require('express')
const {AuthController, loginController,logoutController,submitController} =require('../Controllers/AuthController');
const { verifyToken } = require('../Middlewares/VerifyToken');
const multer =require('multer')

const storage = multer.memoryStorage(); // Store in memory
const upload = multer({ storage: storage });

const router=express.Router();

router.post('/register',AuthController)
router.post('/logout',verifyToken,logoutController)
router.post('/login',loginController)
router.post('/submit',upload.single('file'),submitController)

module.exports=router     