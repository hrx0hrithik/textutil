import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked")
        setText(text.toUpperCase())
        // setText("You have clicked on handleUpClick")
    }
    const handleLwClick = () => {
        setText(text.toLowerCase())
    }
    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }
    const [text,setText] = useState("Enter text here");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleLwClick}>Convert to lower case</button>
    </div>
    <div className="cointainer my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  );
}
