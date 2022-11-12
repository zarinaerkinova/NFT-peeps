import React from 'react'
import './Team.scss'
import Info from '../../components/Info/Info'
import TeamCard from '../../components/Team/TeamCard'
import ceo from './imgs/ceo.png'
import developer from './imgs/developer.png'
import john from './imgs/john.png'
import justin from './imgs/justin.png'
import jessica from './imgs/jessica.png'
import katty from './imgs/katty.png'

const Team = () => {
    return (
        <section className='teamSection'>
            <div className="container">
                <div className="title">
                    <Info spanText='Team' headerText='Meet Our Team' />
                </div>
                <div className="info">
                    <div className="row">
                        <div className="col-4">
                            <TeamCard image={ceo} spanText='CEO' name='Jennifer'/>
                        </div>
                        <div className="col-4">
                            <TeamCard image={developer} spanText='Developer' name='Matthew'/>
                        </div>
                        <div className="col-4">
                            <TeamCard image={john} spanText='Developer' name='John'/>
                        </div>
                        <div className="col-4">
                            <TeamCard image={justin} spanText='Designer' name='Justin'/>
                        </div>
                        <div className="col-4">
                            <TeamCard image={jessica} spanText='Designer' name='Jessica'/>
                        </div>
                        <div className="col-4">
                            <TeamCard image={katty} spanText='Designer' name='Katty'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
