import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked:" + text);
        let newText=text.toUpperCase();
        // setText("You have clicked on handleUpClick")
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");

    }
    const handleClearClick = ()=>{
        var nText='';
        setText(nText);
        // console.log("handleClearClick");
        props.showAlert("Cleared text","success");

    }
    const handleCopy = ()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");

    }
    const handleExtraSpaces = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");

    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText]=useState('');
//   text="new text" //wrong way to change the text
    // setText("new text");//correct way to change the text
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}Enter the text to analyze below </h1>
        <div className="mb-3" >
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8 "></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary  mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary  mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary  mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
            {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes will be required to read the whole text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text into the textbox to preview it here"}</p>
    </div>
    </>
  )
}
