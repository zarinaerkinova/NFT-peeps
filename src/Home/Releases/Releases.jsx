import React from 'react'
import './Releases.scss'
import Info from '../../components/Info/Info'
import Release from '../../components/Release/Release'
import img from './images/img.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import standing from './images/Standing.png'
import sitting from './images/Sitting.png'

const Releases = () => {
    return (
        <section className='ReleasesSection'>
            <div className="container">
                <div className="title">
                    <Info spanText='Releases' headerText='Our Roadmap' />
                </div>
                <div className="info">
                    <Release spanText='Q1 2022' headerText='Community DAO' percent='0%' />
                    <Release spanText='Q2 2022' headerText='Opening Event' percent='20%' />
                    <Release spanText='Q3 2022' headerText='Charity Donation' percent='40%' />
                    <Release spanText='Q4 2022' headerText='Rare Giveaways' percent='60%' />
                    <Release spanText='Q1 2023' headerText='New Nfts' percent='80%' />
                    <Release spanText='Q2 2023' headerText='Metaverse' percent='100%' />
                    <img className='img1' src={img} alt="png" />
                    <img className='standing' src={standing} alt="png" />
                    <img className='sitting' src={sitting} alt="png" />
                    <img className='img2' src={img2} alt="png" />
                    <img className='img3' src={img3} alt="png" />
                </div>
            </div>
        </section>
    )
}

export default Releases
