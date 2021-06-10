const notes=require('./notes.js');
const fs=require("fs");

fs.writeFileSync('notes.txt','This file was created by node.js');
fs.appendFileSync('notes.txt','\n Appended this line ');

//const msg = notes();


const validator=require('validator');
console.log(validator.isEmail('rmayank331@gmail.com')); 
//isEMail function checks if a string is an email. 
//It is inside validator package.

//
const chalk=require('chalk');
const yargs=require('yargs');
//const getNotes=require('./notes.js');
const msg=chalk.green.inverse('success');
console.log(msg); 

console.log(process.argv);
console.log("-----------------");
console.log(yargs.argv);


