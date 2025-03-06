import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const num = useRef(null);

  function start(){
    num.current=setInterval(() => {
      setCount(count => count+1)
    }, 1000);
  }
  function stop(){
    clearInterval(num.current);
    num.current=null;

  }
  function reset(){
    stop();
    setCount(0)
  }
  return (
    <>
      <h1>StopWatch {count} Secounts</h1>
      <button
      onClick={start}
      >start</button>
      <br/><br/>
      <button
      onClick={stop}
      >stop</button>
      <br/><br/>
      <button
      onClick={reset}
      >reset</button>
    </>
  )
}

export default App
