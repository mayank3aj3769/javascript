import React ,{useState }from 'react'
//import './Tindercards.css'
function TinderCards() {
    const [people,setPeople]=useState([
    {
        name:"Elon musk",
        url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/330px-Elon_Musk_Royal_Society_%28crop1%29.jpg ",
    },
   /* {
        name:"Mukesh bhai",
        url:"https://img.etimg.com/thumb/msid-68940203,width-650,imgsize-139592,,resizemode-4,quality-100/mukesh-ambani.jpg"
    }*/
]);
   const swiped=(direction,nameToDelete)=>{
   console.log("removing: "+nameToDelete);
   //setLastDirection(direction);
   };

   const outOfFrame=(name)=>{
    console.log(name + "left the screen");
   };
    
    
        return( 
         <div className='tindercards'>
            <div className='tindercards_cardcontainer'>
            {people.map((person) => (
                 <TinderCards
                    className='swipe'
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir)=>swiped(dir,person.name)}
                    onCardLeftScreen={()=>outOfFrame(person.name)}
                 ></TinderCards>
              ))}     
            </div>  
            
            
             
        </div>
        );
    
}

export default TinderCards
