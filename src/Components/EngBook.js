import React from 'react';


 function EngBook({eachBook}) {
console.log(eachBook.title)
const{title, author, imageLink} = eachBook;


    
    return (
        <div>
            <h1>mostrar libros</h1>
            <h1>{eachBook.title}</h1>
            <h2>{author}</h2>
             
        </div>
           
        
    )
}
export default EngBook;