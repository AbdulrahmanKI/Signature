import React from 'react';
import NavBar from "./components/NavBar"
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Preview from "./components/Preview";

library.add(fab);
function App() {
  return (
    <div className="App ">
      <NavBar/>

      <div>
          <Preview/>
         
      </div>
    </div>
  );
}

export default App;
