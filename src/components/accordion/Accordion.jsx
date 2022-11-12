import React from 'react'
import './Accordion.scss'
import plus from './plus.png'

const Accordion = (props) => {
    return (
        <div class="accordion_item">
            <p>{props.text}</p>
            <img className='plus' src={plus} alt="png" />
        </div>
    )
}

export default Accordion
