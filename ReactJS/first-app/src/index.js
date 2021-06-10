import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

function BookList(){
    return (
        <section className='booklist'>
            {books.map((book)=>{
                return 'hello';
            })}
        </section>
    );
}
const books=[
{
    Title:"I love you to the moon and back ",
    Author:" Amelia Hepworth ",
    Image:"https://images-eu.ssl-images-amazon.com/images/I/517h-u1AQlL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
},
{
    Title:"Discovery of India",
    Author:"Jawaharlal Nehru",
    Image:"https://images-na.ssl-images-amazon.com/images/I/51JTJUe0-+L._SX343_BO1,204,203,200_.jpg"
},
];

const names=['john','peter','susan'];
const newName = names.map((name)=>{
 return <h1>{name} </h1>;
});
console.log(newName);
const Book=(props)=>{
    return <article className='book'>
         <img src={props.img} alt='' />
         <h1>{props.title}</h1>
         <h4>{props.author}</h4>
        </article>;
};


ReactDom.render(<BookList/>,document.getElementById('root'));
 