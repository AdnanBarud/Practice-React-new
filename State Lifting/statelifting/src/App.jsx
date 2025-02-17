import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  const [name, setName] = useState('Adnan');

  return (
    <>
     <Card name={name} setname={setName}/>
     
    </>
  )
}

export default App
