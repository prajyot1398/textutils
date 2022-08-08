
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import {useState} from 'react'

function App() {

  const [bgColor, /*setBgColor*/] = useState({
    backgroundColor : "RGBA(33,37,41)",
    height:"auto",
    overflow:"auto",
    minHeight: "100vh"
})

  return (
    <div  style={bgColor}>
      <Navbar title="TextUtils"/>
      <TextForm/>
    </div>
  );
}

export default App;
