import React, { Component } from 'react';
import Samples from './components/samples/Samples';
import './App.css';

class App extends Component {

  render(){
    const name = 'Drums';
    return (
      <div className="max">
       <h1>{ name } in the Browser</h1>
       <Samples />
      </div>
    );
  }
}

export default App;
