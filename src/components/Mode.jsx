import React, { useState, useEffect } from 'react';

function ModeChanger() {

  const [mode, setMode] = useState(document.documentElement.classList.contains("dark") ? 1 : 0);

  useEffect(() => {
    if (mode === 1) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.documentElement.classList.add("dark");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  
  const handleSliderChange = (event) => {
    const value = Number(event.target.value);
    setMode(value);
  };

  return (
    <input
      type="range"
      min={0}
      max={1}
      step={1}
      value={mode}
      onChange={handleSliderChange}
      className="outline-none appearance-none cursor-pointer w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-xl px-1
      range-thumb"
      style={{
        '--thumb-color': mode === 1 ? '#A445ED' : '#888',
        '--bg-color': mode === 1 ? '#444' : '#ddd',
      }}
    />
  );
}

export default ModeChanger;
