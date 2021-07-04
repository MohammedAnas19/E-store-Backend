const express = require('express');
const { getProducts, getProductById } = require('../controllers/productControllers');
const router = express.Router();





// router.post('/product/create',requireSignIn,adminMiddleware,upload.array('productPicture'),createProduct);
router.get('/products/',getProducts);

module.exports=router;