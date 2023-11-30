import React, {useState} from 'react'
import copy from "copy-to-clipboard";
import {CopyToClipboard} from 'react-copy-to-clipboard';
export default function TextForm(props) {
    document.title='TextUtils -Home';
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to uppercase","success");
        document.title='Converted to upper case';

    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to lowercase","success");
        document.title='Converted to lower case';
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newtext='';
        setText(newtext);
    }
    const handleOnChange = (event)=>{
        // console.log("Onchange");
        setText(event.target.value);
    }

    const handleCopy = () =>{
            navigator.clipboard.writeText(text);

    }
    //     const [copyText, setCopyText] = useState('');
     
    //     const handleCopyText = (e) => {
    //         setCopyText(e.target.value);
    //     }
     
    //     const copyToClipboard = () => {
    //         copy(copyText);
    //         // alert(`You have copied "${copyText}"`);
        
    // }
    const handleExtraspaces = (event) => {
    //   let newtext=text.split(/[]+/);
    //   setText(newtext.join(" "));
    // event.target.value=event.target.value.trim();
    let newtext=text.replace(/\s+/g, ' ');
    setText(newtext);
    }

    const [text,setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h1 className='mb-4'>{props.heading}</h1>
       <div className="mb-3">
        {/* <label htmlFor="myBox" class="form-label"></label> */}
        <textarea className="form-control"  value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="10" cols="10" ></textarea>
       </div>
       <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
       <button disabled={text.length===0} className="btn btn-primary mx-2"  onClick={handleCopy}>Copy</button>
       <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=> {return element.length!==0}).length} minutes read</p> 
        {/* 125wpm is avg reading time, so 1 word is read in 1/125 minutes */}
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
