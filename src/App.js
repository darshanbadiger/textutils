
import { useState } from 'react';
import React from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  
  const [mode, setMode]=useState('light');

  const [alert, setAlert]=useState(null);

  const showAlert= (message, type) =>{
    setAlert({
      msg: message,
      typ: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#022733'; 
      showAlert("Dark Mode Enabled!", "success")
      document.title= "TextUtils - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled!", "success");
      document.title= "TextUtils - Light Mode"
    }
  }
  return (
    <> 
    
    {/* <Navbar /> when values are not passed, default values will be appered from navbar default props */}

        <Navbar title = "TextUtils" aboutText="About TextUtils" mode={mode} togglemode={togglemode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
            <Textform showAlert={showAlert} heading = "Enter the text" mode={mode}/>
        </div>
       {/* <About/> */}
          
  </>
  );
}

export default App;
