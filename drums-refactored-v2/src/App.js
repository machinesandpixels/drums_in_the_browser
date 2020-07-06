import React, { Component } from 'react';
import Clap from './components/samples/Clap';
import './App.css';

class App extends Component {

  render(){
    const name = 'Drums';
    return (
      <div className="App">
       <h1>Hello { name }</h1>
       <Clap />
      </div>
    );
  }
}

export default App;
