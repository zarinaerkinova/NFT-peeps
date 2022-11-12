import React from 'react'
import Balls from './Balls.png'
import './RarityCard.scss'

const RarityCard = (props) => {
    return (
        <div className='RarityCard'>
            <div className="row">
                <div className="col-6">
                    <h3>{props.header}</h3>
                    <div className="span">
                        <span>{props.spanText}</span>
                        <img src={Balls} alt="png" />
                    </div>
                    <p>Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus posuere turpis commodo leo ipsum magnis.</p>
                </div>
                <div className="col-6">
                    <img src={props.image} alt="png" />
                </div>
            </div>
        </div>
    )
}

export default RarityCard
