const express =require("express");
const app =express();

// to go to the root directory in the browser you no longer have to create entire server
// just call get()

app.get("/",(req,res)=>{
    res.send("Hello world ");
});

app.listen(3000,()=>console.log("Server running on port 3000"));