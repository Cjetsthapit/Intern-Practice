import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Men from './Pages/Products/Men'
import {Route} from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage/HomePage';


class App extends React.Component {
 
  render(){
    return (
      <div className="App">
        <Header/>
        <Route path="/" exact component={HomePage}/>
        <Route path="/men" exact component={Men}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
