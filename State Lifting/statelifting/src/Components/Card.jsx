import React from 'react'

function Card(props) {
  return (
    <div>
        <p>name={props.name}</p>
        <input type="text" onChange={(e)=>props.setname(e.target.value)}/>
        <p>this is name={props.name}</p>
        {/* <button onClick={()=>props.setname(props.name+"a")}>Click me</button> */}
    </div>
  )
}

export default Card