import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <img src="../src/assets/tractor.jpg" alt="" width={540} style={{border: "2px solid blue", overflow: "hidden"}} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
