import { useState, useEffect, useRef } from "react";

function UseRefCase() {
  const ref = useRef(0);


  const [text, setText] = useState("go")

  function handleClick() {
    
    setText(ref.current.value);
  }

  function handleInputClick() { 

    ref.current.focus();
    ref.current.style.backgroundColor="red";
    console.log("input clicked");
  }

  useEffect(()=>{
    console.log("componentDidMount");
  })

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>click</button>
      <input type="text" ref={ref} onClick={handleInputClick}/>
    </div>
  );
}

export default UseRefCase;
