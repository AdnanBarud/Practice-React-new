import React from 'react'

function BtnLogOut(props) {
  return (
    <div>
        <button onClick={()=>props.setBtn(true)}>Log Out</button>
    </div>
  )
}

export default BtnLogOut