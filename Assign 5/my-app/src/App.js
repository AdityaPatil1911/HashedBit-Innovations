import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(input)); // Avoid `eval` in production. Use a safer parser.
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="display">
        <p>{input || '0'}</p>
        <p>{result ? `= ${result}` : ''}</p>
      </div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) =>
          btn === '=' ? (
            <button key={btn} onClick={calculate}>=</button>
          ) : (
            <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
          )
        )}
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
}

export default App;
