import { useState } from 'react'

import './App.css'
import BtnLogIn from './Components/BtnLogIn.jsx'
import BtnLogOut from './Components/BtnLogOut.jsx'

function App() {
  const [btn, setBtn] = useState(true);

  //conditional renderring usig early return
  if(!btn){
    return(
      <BtnLogOut />
    )
  }


  //conditional renderring usig Logical opratare
  // return (
  //   <div>
  //     <p>This is using Logical oprater</p>
  //     <div>
  //       {btn && <BtnLogIn /> }
  //     </div>
  //   </div>
  // )

  //conditional renderring usig ternary opratare
  // return btn ? <BtnLogIn />: <BtnLogOut />;


  //conditional renderring usig if-else
  // if(btn){
  //   return(
  //     <BtnLogIn setBtn={setBtn}/>
  //   )
  // }
  // else{
  //   return(
  //     <BtnLogOut setBtn={setBtn}/>
  //   )
  // }
  
  return (
    <>
      {/* <BtnLogIn name="name"/> */}
    </>
  )
}

export default App
