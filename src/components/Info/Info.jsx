import React from 'react'
import './Info.scss'

const Info = (props) => {
  return (
    <>
      <span>{props.spanText}</span>
      <h2>{props.headerText}</h2>
    </>
  )
}

export default Info
