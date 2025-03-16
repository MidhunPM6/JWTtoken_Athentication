const express = require('express')
<<<<<<< HEAD
const {AuthController, loginController,logoutController} =require('../Controllers/AuthController');
const { verifyToken } = require('../Middlewares/VerifyToken');


=======
const {AuthController, loginController,logoutController,submitController} =require('../Controllers/AuthController');
const { verifyToken } = require('../Middlewares/VerifyToken');
const multer =require('multer')
>>>>>>> f77eff3 (GoogleCloud Integrated)

const storage = multer.memoryStorage(); // Store in memory
const upload = multer({ storage: storage });

const router=express.Router();

router.post('/register',AuthController)
router.post('/logout',verifyToken,logoutController)
router.post('/login',loginController)
<<<<<<< HEAD
router.post('/logout',verifyToken,logoutController)
=======
router.post('/submit',upload.single('file'),submitController)
>>>>>>> f77eff3 (GoogleCloud Integrated)

module.exports=router     