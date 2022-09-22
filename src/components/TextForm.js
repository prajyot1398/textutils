import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
  
  //useState is the hook from react  
  const [text1, setText1] = useState();  
  const [text2, setText2] = useState();

  //When Uppercase is clicked
  const onUpperClicked = () => {
    if(checkValidText(text1)) {
      if(checkValidText(text2) && text1.split(/[ ]+/).join().toLowerCase() === text2.split(" ").join().toLowerCase()) {
        setText2(text2.toUpperCase());
      }else {
        setText2(text1.toUpperCase())
      }
    }else {
      alert("Invalid Input Text !");
    }
  }  

  //When Lowecase is clicked
  const onLowerClicked = () => {
    if(checkValidText(text1)) {
      if(checkValidText(text2) && text1.split(/[ ]+/).join().toLowerCase() === text2.split(" ").join().toLowerCase()) {
        setText2(text2.toLowerCase());
      }else {
        setText2(text1.toLowerCase())
      }
    }else {
      alert("Invalid Input Text !");
    }
  }

  //When Clear is clicked
  const onClearClicked = () => {
    setText1("");
    setText2("");
  }

  //When Clear Output Clicked
  const onClearOutputClicked = () => {
    setText2("");
  }

  //When Remove Extra Spaces Is Clicked
  const onRemoveExtraSpaces = () => {
    if(checkValidText(text1)) {
      setText2(text1.split(/[ ]+/).join(" "));
    }else {
      alert("Invalid Input Text !");
    }
  }

  //copy the selected content, if not selected whole 
  const onCopySelected = () => {
    let textForm = document.getElementById("inpTextArea");
    if (textForm.selectionStart !== undefined && textForm.selectionStart !== textForm.selectionEnd) {
      navigator.clipboard.writeText(textForm.value.substring(textForm.selectionStart, textForm.selectionEnd));
    }else {
      textForm.select();
      navigator.clipboard.writeText(textForm.value);
    }
  }

  //Copy whole output
  const onCopyOutput = () => {
    document.getElementById("opTextArea").select();
    navigator.clipboard.writeText(text2);
  }
  
  //Add Search Count For Word.

  //Capitalize first letter.
  const onCapitalizeFirstLetter = () => {
    if(checkValidText(text1)) {
      let text = "";
      if(checkValidText(text2) && text1.split(/[ ]+/).join().toLowerCase() === text2.split(" ").join().toLowerCase()) {
        text = text2.toLowerCase();
      }else {
        text = text1.toLowerCase();
      }
      let textArr = text.split(/[ ]+/);
      let newText = "";
      textArr.forEach((e) => {
        e = e.charAt(0).toUpperCase()+e.slice(1);
        newText = newText+e+" ";
      })
      setText2(newText);
    }else {
      alert("Invalid Input Text !");
    }
  }

  const reverseString = (str) => {
    let str1 = [];
    if(checkValidText(str)) {
      
      for (let i=str.length-1; i >= 0 ; i--) {
        str1.push(str.charAt(i));
      } 
    }
    return str1.join("");
  }

  //Reverse String
  const onReverseText = () => {
    if(checkValidText(text1)) {
      if(checkValidText(text2) && text1.toLowerCase() !== reverseString(String(text2)).toLowerCase()) {
        setText2(reverseString(String(text2)));
      }else {
        setText2(reverseString(String(text1)));
      }
    }else {
      alert("Invalid Input Text !");
    }
  }

  const onInpChanged = (event) => {
    setText1(event.target.value);
    if(event.target.value === undefined || event.target.value === "") {
        setText2("");
    }
  }

  const onOpChanged = (event) => {
    if(!checkValidText(text1)) {
      setText2("")
      event.target.value = "";
    }
  }

  const checkValidText = (text) => text !== undefined && text !== null && text.trim() !== ""

  return (
    <div className="container">
        <h2 className={`mt-3 text-${props.mode === "light" ? "dark" : "light"}`}>Enter Text To Modify</h2>
        <div className="mt-1 mb-3">
            <div className="input-group">
                <textarea className={`form-control`} 
                    id="inpTextArea" rows="8" placeholder="Enter Text Here" 
                    onChange={onInpChanged}
                    value={text1}
                    style = {{color : props.mode === "light" ? "black" : "white",
                              backgroundColor : props.mode === "light" ? "white" : "RGBA(33,37,41)"}}/>
                <textarea className={`form-control`} onChange={onOpChanged}
                    id="opTextArea" rows="8" placeholder="Updated Text Here" value={text2}
                    style = {{color : props.mode === "light" ? "black" : "white",
                      backgroundColor : props.mode === "light" ? "white" : "RGBA(33,37,41)"}}
                    />
            </div>
        </div>
        <button className="btn btn-outline-success me-3 my-3" onClick={onUpperClicked}>Uppercase</button>
        <button className="btn btn-outline-success me-3 my-3" onClick={onLowerClicked}>Lowecase</button>
        <button className="btn btn-outline-success me-3 my-3" onClick={onCapitalizeFirstLetter}>Capitalize</button>
        <button className="btn btn-outline-success me-3 my-3" onClick={onRemoveExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-outline-success me-3 my-3" onClick={onReverseText}>Reverse Text</button>
        <button className="btn btn-outline-success me-3 my-3" onClick={onCopySelected}>Copy Selected</button>
        <button className="btn btn-outline-success me-3 my-3" onClick={onCopyOutput}>Copy Output</button>
        <button className="btn btn-outline-success me-3 my-3" onClick={onClearClicked}>Clear</button>
        <button className="btn btn-outline-success me-3 my-3" onClick={onClearOutputClicked}>Clear Output</button>

        <div>
            <h3 className={`mt-4 text-${props.mode === "light" ? "dark" : "light"}`}>Text Summary</h3>
            <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
                Words : {checkValidText(text1) ? text1.split(/[ ]+/).join(" ").trim().split(" ").length : 0} <br></br>
                Length : {checkValidText(text1) ? text1.split(/[ ]+/).join(" ").trim().length : 0}<br></br>
                Time To Read : {checkValidText(text1) ? text1.split(/[ ]+/).join(" ").trim().split(" ").length*0.0076 : 0} Minutes.
            </p>
            {checkValidText(text1) && <h4 className={`text-${props.mode === "light" ? "dark" : "light"}`}>Prview</h4>}
            {checkValidText(text1) && <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>{text1}</p>}
        </div>
    </div>
  )
}
