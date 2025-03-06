import React, { useContext } from 'react'
import { NumberContext } from '../../App'


const ChildC = () => {
   
    const {count, setCount, btnRef}= useContext(NumberContext);
    function handelClick(){
        setCount(count+1)
        btnRef.current+=1
    }
    console.log(btnRef);
  return (
    <div>
        <button onClick={handelClick}>
            increment
        </button>
        <p>count: {count}</p>
        
        
    </div>
  )
}

export default ChildC