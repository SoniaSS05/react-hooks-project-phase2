import React, { useState } from 'react';
import './EngBook.css';


 function EngBook({eachBook, delBook, updateBook}) {

console.log(eachBook.title)
    const{id, title, author, imageLink} = eachBook;
    const [ favorite, stateFavorite ] = useState(false);
    console.log('por fuera')
console.log(favorite)
    function handleClickDelBook(){
        delBook(id);
    }
    
    function handleClickFav(){
        let fav = !favorite;
        console.log('despues de Click')
        console.log(favorite)
        console.log(fav)
        stateFavorite(fav);
        const updReg = {
            like: fav
        }
        updateBook(updReg,id);
    }
    return (

        <div className="col-3">
            <img src={imageLink} alt={"CoverPage"} className="rounded float-center styimg"/>
            <p ><strong>{title}</strong>  -  {author}</p>
       
          {favorite ? (
            <button onClick={handleClickFav}>★</button>
          ) : (
            <button onClick={handleClickFav}>☆</button>
          )}
          <button onClick={handleClickDelBook}>🗑</button>
        </div>
    
 
             
     
           
        
    )
}
export default EngBook;