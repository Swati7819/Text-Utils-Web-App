
import React, { useState,useRef } from 'react';
export const TextForm = (props) => {
    const [text, setText] = useState('');
    const [isReading, setIsReading] = useState(false);
    const utteranceRef = useRef(null);

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    };

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
    };

    const handleToggleReadText = () => {
      if (!isReading) {
          startReading();
      } else {
          stopReading();
      }
  };

  const startReading = () => {
      setIsReading(true);
      utteranceRef.current = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utteranceRef.current);
  };

  const stopReading = () => {
      setIsReading(false);
      window.speechSynthesis.cancel();
  };

    const handleTrimSpaces = () => {
        setText(text.replace(/\s{2,}/g, ' '));
    };

    const handleCapitalizeFirstLetter = () => {
        setText(text.replace(/\b\w/g, (char) => char.toUpperCase()));
    };

    const handleClearText = () => {
        setText('');
    };

    return (
        <>
            <div className="mb-3 my-3">
                <h3>
                    <label htmlFor="myBox" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        {props.heading}
                    </label>
                </h3>
                <textarea
                    className={`form-control text-${props.mode === 'light' ? '#D3D3D3' : 'light'}`}
                    id="myBox"
                    rows="8"
                    value={text}
                    onChange={handleInputChange}
                    style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}
                ></textarea>
            </div>

            <div className="d-flex flex-wrap">
            <button className="btn btn-primary mx-3 my-3" onClick={handleUpperCase}>
                Convert To UpperCase
            </button>
            <button className="btn btn-primary mx-3 my-3" onClick={handleLowerCase}>
                Convert To LowerCase
            </button>
            <button className="btn btn-primary mx-3 my-3" onClick={handleCopyText}>
                Copy Text
            </button>
            <button className="btn btn-primary mx-3 my-3" onClick={handleToggleReadText }>
                Read Text
            </button>
            <button className="btn btn-primary mx-3 my-3" onClick={handleTrimSpaces}>
                Trim Spaces
            </button>
            <button className="btn btn-primary mx-3 my-3" onClick={handleCapitalizeFirstLetter}>
                Capitalize First Letter
            </button>

            <button className="btn btn-primary mx-3 my-3" onClick={handleClearText}>
                Clear Text
            </button>
            </div>

            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h3>Your Text Summary</h3>
                {/* <p>
                    {text.trim().split(' ').length} words and {text.length} characters
                </p> */}
                <p>
                {text.trim().split(/\s+/).filter(Boolean).length} words and {text.length} characters
                 </p>

                <p>{0.008 * text.trim().split(' ').length} Minutes Read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Enter something in the Textbox above to preview</p>}</p>
            </div>
        </>
    );
};

{/* <div>
import React, { useState } from 'react'
import { ReactPropTypes } from 'react'

export const TextForm = (props) => {
    function UpConvert() {
        let newState = Text.toUpperCase();
        setText(newState);
    }

    function LpConvert() {
      let newState = Text.toLowerCase();
      setText(newState);
  }


    function handleChange(event){
        setText(event.target.value)
    }

    const [Text, setText] = useState(" ")
  return (
    <>
   <div class="mb-3 my-3" >
  <h3><label for="myBox" class={`form-label text-${props.mode==='light' ? 'dark' : 'light'} `}>{props.heading}</label></h3>
  <textarea class={`form-control text-${props.mode==='light' ? '#D3D3D3' : 'light'}`} id="myBox" rows="8" value = {Text} onChange={handleChange} style = {{backgroundColor: props.mode==='dark'? 'grey':'white'}}></textarea>
  </div>
  <button className='btn btn-primary mx-3' onClick={UpConvert}>Convert To UpperCase</button>
  <button className='btn btn-primary mx-3' onClick={LpConvert}>Convert To LowerCase</button>

  <div className={`container my-3 text-${props.mode==='light' ? 'dark' : 'light'}`} >
    <h3>Your Text Summary</h3>
    <p>{Text.trim().split(" ").length} words and {Text.length} characters</p>
    <p>{0.008*Text.trim().split(" ").length} Minutes Read</p>
    <h3>Preview</h3>
    <p>{(Text.length>0? Text :<p className={`text-${props.mode==='light' ? 'dark' : 'light'}`}>Enter something in the Textbox above to preview</p>)}</p>
  </div>
  </>
  )
}

style = {{color: props.mode==='dark'? 'light':'dark'}}

</div> */}