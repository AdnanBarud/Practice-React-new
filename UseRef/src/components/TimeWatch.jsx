import React, { useRef, useState } from 'react'

const TimeWatch = () => {

    let [count, setCount]= useState(0);
    let timeRef= useRef(null);
    function handleStart(){
       timeRef.current= setInterval(()=>{
            setCount(count=>count+1)
        },1000)
    }
    function handleStop(){
       clearInterval(timeRef.current);
       timeRef.current=null;
    }
    function handleReset(){
        handleStop();
        setCount(0)
    }
  return (
    <div>
        <p>Stop Watch {count} Secounds</p><br/>
        <button ref={timeRef} onClick={handleStart}>start</button>
        <br/><br/>
        <button onClick={handleStop}>Stop</button>
        <br/><br/>
        <button onClick={handleReset}>Reset</button>
        
    </div>
  )
}

export default TimeWatch