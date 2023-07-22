import React, { useState } from 'react';
import icon from '../../assets/img/icon-128.png';

const Main = () => {
  const [highlightedText, setHighlightedText] = useState('');

  const handleCaptureClick = () => {
    console.log('clicked')
    // Send a message to contentScript.js to get the selected text
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'getSelectedText' }, function (response) {
        // Handle the response from the content script (selected text)
        setHighlightedText(response);
      });
    });
  };

  return (
    <div>
      <p>Hello, philosopher!</p>
      <img src={icon} alt="extension icon" />
      <button onClick={handleCaptureClick}>Capture Highlighted Text</button>

      <p>{highlightedText}</p>
    </div >
  )
}

export default Main;
