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

  console.log('entre a App')
  console.log(data);
  return (
    <div className="App">
      
      <AddBook addBook={addBook}/>
      <DispBook data={data}/>
    
  </div>
  );
}

export default App;
