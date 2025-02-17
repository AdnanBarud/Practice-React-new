import React, { useState } from 'react'
import "./Counter.css"

function Counter() {
    let [count, setcount]= useState(0);
  return (
    <div className='countainer'>
        <p>you clicke {count} times</p>
        <button onClick={()=>{setcount(count+1)}}>Clicke me</button>
    </div>
  )
}

export default Counter