import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("")
    const handleUpClick = ()=>{
      //console.log('Uppercase was clicked')
      let newText = text.toUpperCase()
      props.showAlert("Converted to upper case","success")
      setText(newText)
    }
    const handleLoClick = ()=>{
      //console.log('Uppercase was clicked')
      let newText = text.toLowerCase()
      setText(newText)
      props.showAlert("Converted to lower case","success")
    }
    const handleOnChange = (event)=>{
    //  console.log('OnChange')
      setText(event.target.value)
    }
    const handleClear=()=>{
      setText('')
      props.showAlert("Text Cleared","success")
    }
    const handleCopy = ()=>{
      const text = document.getElementById("myBox")
      text.select()
      props.showAlert("Text Copied to Clipboard","success")
      document.getSelection().removeAllRanges()
      navigator.clipboard.writeText(text.value)
    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Extra Spaces removed","success")
    }
    //text = "new text"// Wrong way to change the state
   // setText("new text")// Correct way to change the state
  return (
    <>
    <div className='container' style={{color:props.mode==="light"?"#042743":"white"}}>
      <h1 className='mb-4'>{props.heading}</h1>
<div className="mb-3" style={{color:props.mode==="light"?"#042743":"white"}}>
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
style={{backgroundColor:props.mode==="light"?"white":"#13466e", color:props.mode==="light"?"black":"white"}}>
</textarea>
  </div>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleUpClick}>Convert To Uppercase</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleLoClick}>Convert To Lowercase</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleClear}>Clear Text</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleCopy}>Copy Text</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleExtraSpaces}>Handle Extra Spaces</button>
  </div>
  <div className="container my-3" style={{color:props.mode==="light"?"#042743":"white"}}>
    <h2>Your text summary</h2>
    <p>{ text.split(/\s+/).filter((element)=>{return element.length!==0 }).length } words, {text.length} characters</p>
    <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0 }).length } Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length === 0?"Nothing to Preview":text }</p>
  </div>
  </>
  )
}