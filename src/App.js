//import logo from './logo.svg';
import React from 'react';
import {Route} from 'react-router-dom';
//import Header from './Components/Header';
import ContactPage from './Pages/ContactPage';

import './App.css';
import CheckPage from './Pages/CheckPage';
import HomePage from './Pages/HomePage';

// import {Route} from 'react-router-dom';
// import Home from './Components/Home';
 
function App() {
  return (
    <div className="app">
    <main>
    {/* <Switch> */}
      <Route exact key ="home" path ="/" component = {HomePage}/>
      <Route exact key ="check" path ="/check" component = {CheckPage} />
      <Route exact key ="contact" path ="/contact" component = {ContactPage} />
    {/* </Switch> */}
    </main>
    </div>
  );
}

export default App;
