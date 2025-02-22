import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function expensiveTask(num){
     for(let i=0; i<=10000; i++){
    console.log("0"); 
   }
   return num*2
  }

  
 
  let double=useMemo(() => expensiveTask(input), [input])

  return (
    <>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <p>count {count}</p>
      <input
       type="number" 
       placeholder='enter number'
       value={input}
       onChange={(e)=> setInput(e.target.value)}
       />

      <p>double {double}</p>
    </>
  )
}

export default App
