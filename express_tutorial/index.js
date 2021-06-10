const express =require('express');

const app=express();

const PORT =process.env.PORT || 5000; 

app.get('/',(req,res)=>{
  
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1> Hi there </h1>');

});

const members =[
    {
        id:1,
        name:"john",
        email:"john@gmail.com"
    },
    {
        id:2,
        name:"may",
        email:"blabla@bla.bla",
    }
]
 // create a middleware

const logger=(req,res,next)=>{
    console.log("Hi");
    next();
}
// Init middleware
app.use(logger);

app.get('/api/test',(req,res)=>{

    res.json(members);
});



app.listen(PORT,()=>console.log(`server started on PORT: ${PORT}`));