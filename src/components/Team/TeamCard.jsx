import React from 'react'
import './TeamCard.scss'

const TeamCard = (props) => {
  return (
    <div className='teamCard'>
      <div className="img_top">
        <img src={props.image} alt="png" />
      </div>
      <div className="info_bottom">
        <span>{props.spanText}</span>
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

export default TeamCard
