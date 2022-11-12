import React from 'react'
import Accordion from '../../components/accordion/Accordion'
import Info from '../../components/Info/Info'
import './Faq.scss'
import image from './imgs/IMAGE.png'

const Faq = () => {
  return (
    <section className='faq'>
      <div className="container">
        <img className='faqImg' src={image} alt="png" />
        <div className="title">
            <Info spanText='Faq' headerText='Frequent Questions'/>
        </div>
        <div className="Accordion">
            <Accordion text='Imperdiet et nunc, ipsum laoreet iaculis aliquet?'/>
            <Accordion text='Mi fringilla sit felis tristique varius tempus?'/>
            <Accordion text='Faucibus nec dictum pellentesque arcu ultrices ultricies?'/>
            <Accordion text='Morbi eget tristique porttitor turpis placerat tristique?'/>
            <Accordion text='Dolor turpis at turpis senectus convallis nunc pellentesque?'/>
            <Accordion text='Amet, viverra tellus ultricies non eros faucibus hendrerit?'/>
        </div>
      </div>
    </section>
  )
}

export default Faq
