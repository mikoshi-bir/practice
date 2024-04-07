import React, { useState } from 'react';

export default function AddString() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    setDisplayText(inputText.toUpperCase());
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Display Text</button>
      <p>{displayText}</p>
    </div>
  );
}