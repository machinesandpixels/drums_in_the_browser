import React, { Component } from 'react';
import Samples from './components/samples/Samples';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="max">
       <h1> Drums in the Browser</h1>
       <Samples />
      </div>
    );
  }
}

export default App;
