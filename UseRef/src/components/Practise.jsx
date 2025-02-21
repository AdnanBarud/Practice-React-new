import React from 'react'
import { useRef, useState } from 'react'

const Practise = () => {

  const [count, setCount] = useState(0)
  let btnRef = useRef();

  function handleClick(){
    setCount(count+1)
    btnRef.current.style.backgroundColor= "red";
  }


  return (
    <div>

      <button
      ref={btnRef} 
      onClick={handleClick}>Click me</button>
      <p>Count={count}</p>
    
  
    </div>
  )
}

export default Practise