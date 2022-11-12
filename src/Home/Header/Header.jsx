import React from 'react'
import Navbar from './Navbar/Navbar'
import './Header.scss'
import Button from '../../components/Button/Button'

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="container">
        <div className="info">
          <span>NFT Collection</span>
          <h1>Bored</h1>
          <h1>NFT Peeps</h1>
          <p>Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio in tellus risus.</p>
          <Button text='OpenSea' />
        </div>
      </div>
    </header>
  )
}

export default Header
