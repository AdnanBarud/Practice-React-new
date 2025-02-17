import React from 'react'

// import tanveerImage from "../assets/tanveer.avif";

import "./Card.css"  

function Card(props) {
  return (
    <div className='container'>
     <div className='main'>
        <h1 className='Name'>{props.Name}</h1>
    
        <img src={props.image} alt="" />
        <p>{props.discription} </p>
     </div>
    </div>
  )
}

export default Card