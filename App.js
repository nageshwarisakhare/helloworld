//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name ="Saomi" lastName="Sinha">
        <p>This is children props.</p>
        </Greet>
        <Greet name="Niyonika" lastName="Singh">
        <button>Action</button>
        </Greet>
        <Greet name="Amrapali" lastName="Dahiwale" />
        <Welcome name ="Saomi" lastName="Sinha"/>
        <Welcome name="Niyonika" lastName="Singh"/>
        <Welcome name="Amrapali" lastName="Dahiwale"/>
        {/*<Hello />*/}
      </div>
    );
  } 
}

export default App;
