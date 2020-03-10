import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import NavToggle from './components/NavToggle';
import './App.css';
import BodyMain from './components/BodyMain';

function App() {
  return (
    <div className="App">
      <NavToggle/>
      <BodyMain/>
      </div>
  );
}

export default App;
