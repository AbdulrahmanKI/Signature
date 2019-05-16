import React from 'react';
import NavBar from "./components/NavBar"
import './App.css';

import Preview from "./components/Preview";


function App() {
  return (
    <div className="App">
      <NavBar/>

      <div>
          <Preview/>
         
      </div>
    </div>
  );
}

export default App;
