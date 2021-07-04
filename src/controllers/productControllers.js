const productModel = require("../models/productModel");



exports.getProducts=(req,res)=>{
    const {id}=req.query;
    if(!id){
    productModel.find({}).exec((error, products) => {
        if(error) {
            return res.status(500).json(error);
        }
            return res.status(200).json({products: products});
            //res.send(result);
    });
    }    
    else{
    productModel.find({_id:id}).exec((error, products) => {
        if(error) {
            return res.status(500).json(error);
        }
            return res.status(200).json({products: products});
            //res.send(result);
    });   
    }
}
