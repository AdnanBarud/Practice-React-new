import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

const [count, setCount] = useState(0);

const [time, setTime] = useState(1);
  // First: This Will run on Every render
  // useEffect(() => {
  //   alert("I will run on every render")

  // })

  //Secound: This will run when count change 
  // useEffect(() => {
  //   alert("I will run when count is change")
  
    
  // }, [count])
  
  //Third: This will run on first render only
  // useEffect(() => {
  //   alert('I will run on first render only')
  
    
  // }, [])
  
  //Four: This will run when count/time change
  useEffect(() => {
    alert("I will run when count/time change")
  
    return () => {
      alert("I will run when u hide count or time from ui")
    }
  }, [count,time])
  



  return (
    <>
      
      <button onClick={()=>setCount(count+1)}>Click Me</button>
        <p>Count is: {count}</p>


      <button onClick={()=>setTime(time+1)}>Click Me</button>
        <p>Time is: {time}</p>
    </>
  )
}

export default App
