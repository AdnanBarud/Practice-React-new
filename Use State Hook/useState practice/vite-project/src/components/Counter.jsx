import React, { useState } from 'react'
import './counter.css'
function Counter() {

 const [count, setCount] = useState(0);

  return (
    
    <div>
        <p>you have clicked med {count} times</p>
        <button
        onClick={() => setCount(count + 1)}
        >Click me</button>

    </div>
  )
}

export default Counter