import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';


function App() {
  const [box, setBoxColor]=useState([])
  return (
    <div className="App">
      <Box />
    </div>
  );
}

export default App;
