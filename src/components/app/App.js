import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Routes, Route} from "react-router-dom";
import Landing from '../Landing/Landing';


function App() {
  return (
    <div className="App">
      
   <Navbar/>
   <Landing/>
   
    </div>
  );
}

export default App;
