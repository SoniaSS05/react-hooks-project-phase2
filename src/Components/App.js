import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AddBook from './AddBook';
import DispBook from './DispBook';



function App() {

  const[data, setData] = useState([
    {
      "author": "",
      "country": "",
      "imageLink": "",
      "language": "",
      "link": "",
      "pages": 0,
      "title": "",
      "year": 0
    }
]);

useEffect(() => {
  console.log('At useeffect')
  fetch("http://localhost:3000/books")
    .then(response => response.json())
   //.then(data => console.log(data))
    .then(resData =>setData(resData))
}, []); 


function addBook(newBook){
  const config = {
    method: "POST",
    headers: {
      "Content-type":  "application/json",
    },
    body: JSON.stringify(newBook)
  }

  fetch("http://localhost:3000/books",config)
    .then(response => response.json())
    .then(newBook =>{
      const newBooks =[...data, newBook];
      setData(newBooks);
    })
}

function delBook(bookId){
  const config = {
      method: "DELETE"
  };
  fetch(`http://localhost:3000/books/${bookId}`, config)
  .then(response => response.json())
  .then(()=>{
      const updList = data.filter(filData=>filData.id!==bookId);
      setData(updList);
  })
}


  console.log('entre a App')
  console.log(data);

  function  updateBook(updFavorite, upId){
    console.log('UPDATE '+ updFavorite + ' ' + upId)
  
    fetch(`http://localhost:3000/books/${upId}`,  {
          method: "PATCH",
          headers: {
            "Content-type":  "application/json",
          },
          body: JSON.stringify(updFavorite),
    })
      .then(response => response.json())
      .then((updFavorite) =>{
          const updLikes = data.map((dat)=>{
                if(dat.id === upId) return updFavorite;
                return dat;
          })
        
          setData(updLikes);
      })
  }

  return (
    <div className="App">
      
      <AddBook addBook={addBook}/>
      <DispBook data={data} delBook={delBook} updateBook={updateBook}/>
    
  </div>
  );
}

export default App;
