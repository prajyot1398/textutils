import React from 'react'
import { useState } from 'react'

export default function TextForm() {
  
  //useState is the hook from react  
  const [text1, setText1] = useState();  
  const [text2, setText2] = useState();

  const onUpperClicked = () => {
    setText2(text1.toUpperCase())
  }  

  const onLowerClicked = () => {
    setText2(text1.toLowerCase())
  }

  const onInpChanged = (event) => {
    setText1(event.target.value);
    if(event.target.value === undefined || event.target.value === "") {
        setText2("");
    }
  }
  return (
    <div className="container">
        <h2 className="mt-3 text-bg-dark">Enter Text To Modify</h2>
        <div className="mt-1 mb-3">
            <div className="input-group">
                <textarea className="form-control bg-dark text-bg-dark" 
                    id="inpTextArea" rows="8" placeholder="Enter Text Here" 
                    onChange={onInpChanged}
                    value={text1}/>
                <textarea className="form-control bg-dark text-bg-dark" 
                    id="opTextArea" rows="8" placeholder="Updated Text Here" value={text2}/>
            </div>
        </div>
        <button className="btn btn-outline-success me-3" onClick={onUpperClicked}>Uppercase</button>
        <button className="btn btn-outline-success me-3" onClick={onLowerClicked}>Lowecase</button>

        <div>
            <h3 className="mt-4 text-bg-dark">Text Summary</h3>
            <p className="text-bg-dark">
                Words : {text1 ? text1.split(" ").length : 0} <br></br>
                Length : {text1 ? text1.length : 0}<br></br>
                Time To Read : {text1 ? text1.split(" ").length*0.0076 : 0} Minutes.
            </p>
            {text1 !== undefined && text1 !== "" && <h4 className="text-bg-dark">Preview</h4>}
            {text1 !== undefined && text1 !== "" && <p className="text-bg-dark">{text1}</p>}
        </div>
    </div>
  )
}
