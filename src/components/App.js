
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import {useState} from 'react'

function App() {

  const [bgColor, setBgColor] = useState("RGBA(33,37,41)")

  const [mode, setMode] = useState("dark");
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
    <div style={{height:"auto", overflow:"auto", minHeight: "100vh", backgroundColor:bgColor}}>
      <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode}/>
      <TextForm mode={mode}/>
    </div>
  );
}

export default App;
