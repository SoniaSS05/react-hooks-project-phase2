
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Recipes from './Recipes/Recipes';


function App() {
  console.log('entre a App')
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='../Recipes/Recipes'>
            <Recipes />
          </Route>
          <Route path='./About'>About</Route>
          <Route path='./Contactus'>Contact Us</Route> 
          <Route exact path='/'>Home</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
