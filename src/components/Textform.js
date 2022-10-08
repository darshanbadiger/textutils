import React, {useState} from 'react'

export default function Textform(props) {
    // const [text, setText] = useState('Enter text here');
    const [text, setText] = useState('');
    // text = "Chnage the values";//wrong way to change the text
    // setText("Change the text") //correct way to change the text

    const handleUpClick=()=>{
        let newtext = text.toUpperCase();
        console.log(newtext);
        setText(newtext);
        props.showAlert("Concertd to Uppercase!", "success")
        // console.log("Uppercase Clicked ");
        // setText("You have clicked on 'Uppercase Conversion'")
    }
    const handleLowerClick=()=>{
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("Concertd to Lowercase!", "success")
    }
   
    const handleCapitalClick=()=>{
     
    }

    const handleCopyClick=()=>{
      let newtext = document.getElementById("mybox");
      newtext.select();

      navigator.clipboard.writeText(newtext.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to CLipboard!", "success")
    }

    const handleremovespace=()=>{
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "))
      props.showAlert("Removed Extra spaces!", "success")
    }
    const handleClearClick=()=>{
      let newtext = '';
      setText(newtext);
      props.showAlert("All Clear!", "success")
    }
    
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
  return (
    <>
    
    <div>
        <div className="my-3" style={{color: props.mode==='light'?'gray':'white'}}>
        <h1 >{props.heading}</h1>
        {/* <label for="mybox" className="form-label">Example textarea</label> */}

        <textarea className="form-control" placeholder='Enter text here' value={text} onChange={handleOnChange} 
        style={{backgroundColor: props.mode==='dark'?'#7ac7e1':'white',color:props.mode==='light'?'gray':'white' }} id="mybox" rows="8"></textarea>
        
      </div>
    <button disabled={text.length===0} className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalClick}>Capitlize Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleremovespace}>Remove Extra Space</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    
    <div  className='my-2' style={{color: props.mode==='light'?'gray':'white'}}><h1>Text Summery</h1>
    {/* Calculates the total number of words and character in text box */}
    <h5>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</h5> 
    <h5>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</h5>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in the textbox to preview"}</p> 
    </div>
    </>
  )
}
