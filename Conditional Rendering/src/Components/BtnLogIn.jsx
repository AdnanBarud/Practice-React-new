import React from 'react'

function BtnLogIn(props) {
  return (
    <div>
       
        <button onClick={()=>props.setBtn(false)}>Log in</button>
    </div>
  )
}

export default BtnLogIn