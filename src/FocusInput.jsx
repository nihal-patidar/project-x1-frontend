import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.placeholder = "Enter Try"; // Access the input DOM node and focus it
    inputRef.current.style.color = "red" ;
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;

