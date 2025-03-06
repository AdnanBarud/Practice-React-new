import {  createContext, useContext, useRef, useState } from 'react'
import './App.css'
import ChildA from './components/child/ChildA';

const NumberContext =createContext();
 
function App() {
  //create context
  
  const [count, setCount] = useState(0);

  const btnRef =useRef(0);


  return (
    <>
   
   <NumberContext.Provider value={{count,setCount,btnRef}}>
    <ChildA />
   </NumberContext.Provider>
   
    </>
  )
}

export {NumberContext};
export default App

