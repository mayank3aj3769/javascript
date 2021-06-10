const {readFile}=require('fs');
console.log('Started first task');

readFile('./first.txt','utf8',(err,result)=>{ 
       // performing async read operation.

    if(err){
        console.log(err);
        return 
    }
    console.log(result);
    console.log("completed first task");
})
console.log('starting new task');
