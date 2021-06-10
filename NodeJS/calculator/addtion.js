function add(){
    console.log("This is addtion module");
}
var a=10;
module.exports.addition=add;
module.exports.a1=a;


/* Other way of exporting the module is putting the whole thing like this 
  
module.exports={
    additon:function(){ // addition will be name of exported entity
        console.log("Hi");
    },
    a1:20
}

*/
