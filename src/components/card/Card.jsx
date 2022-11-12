import React from 'react'
import './Card.scss'

const Card = (props) => {
  return (
    <>
      <h3>{props.header}</h3>
      <p>{props.text}</p>
    </>
  )
}

export default Card
