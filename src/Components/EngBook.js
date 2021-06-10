import React, { useState } from 'react';


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
             <li >
            <div >
                <strong>{title}</strong>
                <img src={imageLink} alt={"CoverPage"} />
            </div>
      <div >
        {favorite ? (
          <button onClick={handleClickFav}>★</button>
        ) : (
          <button onClick={handleClickFav}>☆</button>
        )}
       
        <span> {author}</span>
        <button onClick={handleClickDelBook}>🗑</button>
      </div>
    </li>
             
     
           
        
    )
}
export default EngBook;