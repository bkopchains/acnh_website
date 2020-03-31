import React from 'react';
import react from './react.png';
import Select from 'react-select'
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={react} className="App-logo" alt="logo" />
        Ben Kopchains - Test App
      </header>
    </div>
    <div>
      <Select />
    </div>
    </>
  );
}

export default App;
