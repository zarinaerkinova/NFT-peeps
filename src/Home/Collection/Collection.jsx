import React from 'react'
import Card from '../../components/card/Card'
import Info from '../../components/Info/Info'
import People from './people.png'
import './Collection.scss'

const Collection = () => {
    return (
        <section className='collectionSection'>
            <div className="container">
                <div className="title">
                    <Info spanText='Collection' />
                    <Info headerText='Meet Our Bored Peeps!' />
                </div>
                <div className="info">
                    <div className="row">
                        <div className="col-6" style={{marginTop: "42px"}}>
                            <div className="card_collection">
                                <Card header='6500 Bored Peeps' text='Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio in tellus risus.' />
                            </div>
                            <div className="card_collection">
                                <Card header='Mint Price & Date' text='Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio in tellus risus.' />
                            </div>
                            <div className="card_collection" style={{borderBottom: "none"}}>
                                <Card header='Why Bored Peeps' text='Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio in tellus risus.' />
                            </div>
                        </div>
                        <div className="col-6">
                            <img src={People} alt="png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collection
