import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {

  

  
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route  path="/" element={<Body/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  )  
}

export default App;
