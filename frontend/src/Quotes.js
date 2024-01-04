import React, { useState } from 'react';
import axios from 'axios';


function Quotes() {
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");

    function getQuote() {
        axios.get('http://localhost:4000', {crossdomain: true})
        .then(res => {
            setText(res.data.text);
            setAuthor(res.data.author);
        })
    }
  return (
    <div>
        <button onClick={getQuote}> 
            Get Quotes
        </button>
        <h1>{text}</h1>
        <h3>{"-" + author}</h3>

    </div>
  )
}

export default Quotes