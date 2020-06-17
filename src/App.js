import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Greet name = 'vinod' gender='male'/> 
      <p> this is children props </p>
      <Greet name = 'sowmya' gender='female'> 
       <button> Action </button>
       </Greet>
      <Welcome/>
      <Welcome name = 'vinod ' gender=' male'/>
      <Hello/>
      <Message/>
    </div>
  );
}

export default App;
