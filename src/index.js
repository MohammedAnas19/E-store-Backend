const Express = require("express");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const cors=require('cors');
const env = require("dotenv");

env.config();

var app = Express();


mongoose.connect(
  process.env.CONNECTION_URL, 
    {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex:true
    }).then(() =>{    
      console.log("Connected to db");
    });



app.use(cors());
app.use(Express.json());




const productRoutes=require('./routes/productRoutes');
const userRoutes=require('./routes/userRoutes');




app.use('/api',productRoutes);
app.use('/api',userRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.PORT}`);
  });