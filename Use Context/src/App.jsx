import { createContext, useState } from 'react'
import './App.css'
import ChildA from './Components/ChildA';

const CountContext= createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <CountContext.Provider value={{count,setCount}}>
      <ChildA />
    </CountContext.Provider>
      
    </>
  )
}
export {CountContext};
export default App
