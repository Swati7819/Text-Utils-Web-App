import React, { useState, useRef } from 'react';

export const TextForm = (props) => {
    const [text, setText] = useState('');
    const [isReading, setIsReading] = useState(false);
    const utteranceRef = useRef(null);

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper Case", "success");
    };

    const handleLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower Case", "success");
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied text to clipboard", "success");
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
        props.showAlert("Started reading", "success");
    };

    const stopReading = () => {
        setIsReading(false);
        window.speechSynthesis.cancel();
        props.showAlert("Reading stopped", "success");
    };

    const handleTrimSpaces = () => {
        setText(text.replace(/\s{2,}/g, ' '));
        props.showAlert("Trimmed spaces", "success");
    };

    const handleCapitalizeFirstLetter = () => {
        setText(text.replace(/\b\w/g, (char) => char.toUpperCase()));
        props.showAlert("Capitalized first letter", "success");
    };

    const handleClearText = () => {
        setText('');
        props.showAlert("Cleared text", "success");
    };

    const handleReverseText = () => {
        setText(text.split('').reverse().join(''));
        props.showAlert("Reversed text", "success");
    };

    const handleRemoveExtraSpaces = () => {
        setText(text.replace(/\s+/g, ' ').trim());
        props.showAlert("Removed extra spaces", "success");
    };

    const countVowelsAndConsonants = () => {
        let vowelsCount = text.match(/[aeiouAEIOU]/g)?.length || 0;
        let consonantsCount = text.match(/[^aeiouAEIOU\s]/g)?.length || 0;
        props.showAlert(`Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`, "success");
    };

    const handleSentenceCase = () => {
        setText(text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (char) => char.toUpperCase()));
        props.showAlert("Converted to sentence case", "success");
    };

    const handleAlternateCase = () => {
        let newText = text.split('').map((char, index) => {
            return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('');
        setText(newText);
        props.showAlert("Converted to alternate case", "success");
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
                <button className="btn btn-primary mx-3 my-3" onClick={handleToggleReadText}>
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
                <button className="btn btn-primary mx-3 my-3" onClick={handleReverseText}>
                    Reverse Text
                </button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleRemoveExtraSpaces}>
                    Remove Extra Spaces
                </button>
                <button className="btn btn-primary mx-3 my-3" onClick={countVowelsAndConsonants}>
                    Count Vowels and Consonants
                </button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleSentenceCase}>
                    Sentence Case
                </button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleAlternateCase}>
                    Alternate Case
                </button>
            </div>

            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h3>Your Text Summary</h3>
                <p>
                    {text.trim().split(/\s+/).filter(Boolean).length} words and {text.length} characters
                </p>
                <p>{0.008 * text.trim().split(/\s+/).filter(Boolean).length} Minutes Read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Enter something in the Textbox above to preview</p>}</p>
            </div>
        </>
    );
};
