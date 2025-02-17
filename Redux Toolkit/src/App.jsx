import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { decrement, increment, incrementByAmount, reset } from './features/counterSlice.jsx'
import './App.css'


function App() {
  
  const count= useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount]= useState(0);
  

  function incrementHandler(){
    dispatch(increment());
  }
  function decrementHandler(){
    dispatch(decrement());
  }
  function resetHandler(){
    dispatch(reset());
  }
  function amountHandler(){
    dispatch(incrementByAmount(amount));
  }

  return (
    <div>
    <button onClick={incrementHandler}>+</button>
    <p>counte: {count}</p>
    <button onClick={decrementHandler}>-</button>
    <br/>
    <br/>
    <button onClick={resetHandler}>reset</button>
    <br/>
    <br/>
    <input
     type="number" value={amount}
     onChange={(e)=>setAmount(e.target.value)} 
    />
    <br/>
    <button onClick={amountHandler}>inc amount</button>
    </div>
  )
}

export default App

//first
import { createBrowserRouter} from " react—router—dom" ;

//second
const router = createBrowserRouter(
  [
    {
      path
    }
  ]
)