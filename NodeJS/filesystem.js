const fs=require("fs");

fs.readFile(__dirname +"/text.txt","utf8",(err,data)=>{

  if(err)
  throw err;
  else
  console.log(data);


}); 

/* This 'readFile' is an event as it returns a callback function.
Here it reads a text file and displays it in a terminal . 
*/

// In order to display the file in a browser a server needs to be created first.

const http = require("http");

const server=http.createServer(function(req,res){

fs.readFile(__dirname+"/text.txt","utf8",(err,data)=>{
    res.writeHead(200,{"content-type":"text/plain"});

    res.write(data);
    res.end();

});    

}).listen(3000,()=>console.log("Server Running on port 3000"));