import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import AddBook from './AddBook';
import DispBook from './DispBook';
import Home from './Home';


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
      "year": 0,
      "like": false
    }
]);

//Filtrado de data. Busqueda de Titulo
  const [searchFilt, setSearchFilt] = useState([]);


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
      alert('hola');
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

  //Look for a Title
  function lookTit(descTit){
    const search = data.filter(filData=>filData.title===descTit);
    if( search.length !== 0 ){
      console.log('ENTRE A UNOOOOOOOOO')
      setSearchFilt([{}]);
    }
    console.log('SEARCH')
    console.log(search);
    setSearchFilt(search);
  }



    console.log('data estoy aca heyeyeyeyeyeyey')
    console.log(data)

  return (
     <>
     
      <Router>
     
       <Switch> 
          <Route exact path="/" > 
            <Home />
          </Route>
          <Route path="/AddBook" > 
            <AddBook addBook={addBook}/>
          </Route>
          <Route path="/DispBook" >
            <DispBook data={data} delBook={delBook} updateBook={updateBook} lookTit={lookTit} searchFilt={searchFilt}/>
          </Route> 
       
          </Switch> 
      </Router>
    </>
  );
}

export default App;
