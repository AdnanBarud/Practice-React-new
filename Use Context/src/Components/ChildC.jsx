import React, { useContext } from 'react'
import { CountContext } from '../App'


const ChildC = () => {
    const {count, setCount} = useContext(CountContext);
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Click me</button>
        <p>count is: {count}</p>
    </div>
  )
}

export default ChildC