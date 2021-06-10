const express =require('express');
const mongoose=require('mongoose');
const morgan=require('morgan'); // help-s in handling routes
const bodyParser=require('body-parser');
require("dotenv").config();

const userRoutes=require('./routes/user');

//app
const app =express();

//db
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true
}).then(()=>console.log('DB connected'));

// middlewares

app.use(morgan('dev'));
app.use(bodyParser.json());

//routes middleware
app.use('/api',userRoutes);

const port=process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Server running on port:${port}`);
});