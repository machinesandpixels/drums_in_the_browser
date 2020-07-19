import React, { Component } from 'react';
import Samples from './components/samples/Samples';
import Controls from './components/controls/Controls';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="max">
       <h1> Drums in the Browser</h1>
       <section>
        <Controls />
       </section>
       <section>
        <Samples />
       </section>
      </div>
    );
  }
}

export default App;
