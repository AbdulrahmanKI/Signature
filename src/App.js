import React from 'react';
import NavBar from "./components/NavBar"
import './App.css';
import HeaderBanner from "./components/HeaderBanner";
import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeaderBanner/>

      <div>
          <InputForm/>
      </div>
    </div>
  );
}

export default App;
