import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("UpperCase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const valueOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleLowClick=()=>{
        console.log("Lowercase was clicked"+ text);
        let newText2=text.toLowerCase();
        setText(newText2)
    }
    const handleClearClick=()=>{
        console.log("Cleared Text");
        let newText2=(' ');
        setText(newText2)
    }
    const [text, setText]=useState('Enter the text heree');
    // Here text is a variable in which 'Enter the text heree' is stored.
    // Now setText is a function which is related to the variable text.
    // Now if u want to change the value of text then you just cant update the value of text as seen in below:
    //   text="Hello this is the new text"  cannot update the text variables value.
    // You need to update with the newvalue with the setText function.
    

    return (
        
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={valueOnChange}id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase:</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase:</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>

        <div class="container my-3">
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.08*text.split(" ").length} time needed to read</p>

            <h2>Preview of the above written text:</h2>
            <p>{text}</p>
        </div>
        </>

    )
}
