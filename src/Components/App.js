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
    <div className="container-xxl app">
      <div className="row colorrow ">
        <div className="col-1 ms-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="60" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
            <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
          </svg>
        </div>
        <div className="col-2 ms-5">
          <h1 className="d-block fw-bold fst-italic logo">My Own Lybrary</h1>
        </div>   
      </div>
    <div className="container">
     {/* <AddBook addBook={addBook}/>*/}
      <DispBook data={data} delBook={delBook} updateBook={updateBook}/>
      </div>
  </div>
  );
}

export default App;
