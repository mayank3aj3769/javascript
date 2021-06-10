const fs=require('fs'); // useless here
const book={
    title:'Ego is the Enemy',
    author:'Ryan Holiday'
}

const bookJSON =JSON.stringify(book);// converts Json object to string 
console.log(bookJSON);

const parsedData =JSON.parse(bookJSON); // converts json string to json object

console.log(parsedData.author); 

