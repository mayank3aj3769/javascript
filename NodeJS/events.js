const events=require("events");

const event =new events.EventEmitter();
                  // creates event object

event.on('click123',(n1,n2)=>console.log(n2-n1));
 // creates an event with name click123 and passes n1 and n2 as parameters
 
event.emit('click123',4,5);

const first_event =function(n1,n2){

    console.log(n2*n1);
    event.emit('click2'); // Trigerring an event inside another event
}
const second_event=function(){
    console.log("Second event triggered");
}

event.on('click2',second_event);
event.on('click1',first_event);
event.emit('click1',4,5);