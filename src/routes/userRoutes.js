const express = require('express');
const { signIn, signUp } = require('../controllers/userControllers');
const router = express.Router();





// router.post('/product/create',requireSignIn,adminMiddleware,upload.array('productPicture'),createProduct);
router.post('/signin/',signIn);
router.post('/signup/',signUp);

module.exports=router;