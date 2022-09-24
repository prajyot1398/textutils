import React from 'react';
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import {useState} from 'react';
import Alert from "./Alert";
import About from "./About";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [bgColor, setBgColor] = useState("RGBA(33,37,41)")

  const [mode, setMode] = useState("dark");
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);      
    }, 1500);
  }
  
  const toggleMode = () => {
    if(mode === "light") {
      setMode("dark");
      setBgColor("RGBA(33,37,41)");
    }else {
      setMode("light");
      setBgColor("white");
    }
  }

  return (
    <BrowserRouter>
      <div  style={{height:"auto", overflow:"auto", minHeight: "100vh", backgroundColor:bgColor}}>
        <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode}/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
