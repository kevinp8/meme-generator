import React from 'react'
import troll from '../images/troll.png'

function Header() {
  return (
    <nav>
        <img src={troll} alt='troll face'/>
        <h1>Meme Generator</h1>
    </nav>
  )
}

export default Header