import React from 'react'
import img from './Vector.png'
import './Release.scss'

const Release = (props) => {
  return (
    <div className='Release'>
      <div className="img">
        <img src={img} alt="" />
        <span>{props.percent}</span>
      </div>
      <div className="box">
        <span>{props.spanText}</span>
        <h3>{props.headerText}</h3>
        <p>Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus posuere turpis commodo leo ipsum magnis.</p>
      </div>
    </div>
  )
}

export default Release
