'use strict';

/*Two teams ,three scores each, winner exactly scores twice the avg . else no result  */ 

const readline=require('readline-sync');
var Dolphins = [];
var Koalas=[];
var size = 3; //Maximum Array size
console.log("Enter dolphins score");
for(var i=0; i<size; i++) {
	
	//Taking Input from user
	Dolphins[i] = Number(readline.question('Enter score ' + (i+1)+' '));
}
console.log("Enter koala score");

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	Koalas[i] = Number(readline.question('Enter score ' + (i+1)+' '));
}


const calcAverage=(arr )=>{
    let avg;
    for(let i=1;i<=3;i++){
        avg+=arr[i];
    }
    avg/=3;
}

const checkWinner=(avgDolphins,avgKoalas)=>{
    if (avgDolphins===avgKoalas*2)
    {
        console.log(`Dolhphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas===avgDolphins*2)
    {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
        
    else
    console.log("No result");
}
const avgDol=calcAverage(...Dolphins);
const avgKol=calcAverage(...Koalas);

checkWinner(avgDol,avgKol);
