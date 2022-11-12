import React from 'react'
import Info from '../../components/Info/Info'
import RarityCard from '../../components/rarityCard/RarityCard'
import Line from '../../components/Line/Line'
import './Rarity.scss'
import Blackboy from './blackboy.png'
import Boy2 from './boy2.png'
import Boy3 from './boy3.png'
import Bust from './Bust.png'
import Girl from './girl.png'

const Rarity = () => {
    return (
        <section className='raritySection' style={{ overflow: 'hidden' }}>
            <div className="container">
                <div className="title">
                    <Info spanText='Rarity' />
                    <Info headerText='Exclusive Content' />
                </div>
                <div className="info">
                    <Line />
                    <div className="infoCard">
                        <RarityCard header='Common' spanText='Tier 1' image={Blackboy} />
                    </div>
                    <Line />
                    <div className="infoCard">
                        <RarityCard header='Uncommon' spanText='Tier 2' image={Boy2} />
                    </div>
                    <Line />
                    <div className="infoCard">
                        <RarityCard header='Rare' spanText='Tier 3' image={Boy3} />
                    </div>
                    <Line />
                    <div className="infoCard">
                        <RarityCard header='Very Rare' spanText='Tier 4' image={Bust} />
                    </div>
                    <Line />
                    <div className="infoCard">
                        <RarityCard header='Legendary' spanText='Tier 1' image={Girl} />
                    </div>
                    <Line />
                </div>
            </div>
        </section>
    )
}
export default Rarity
