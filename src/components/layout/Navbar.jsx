import React from 'react'
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom'
import HangedButton from '../HangedButton'
import { PiDotsNineBold } from "react-icons/pi"
import IconButton from '../IconButton'

const Navbar = () => {
  return (
    <nav>
      <div className='Navbar_container'>
        <Link to="/">
            <div className='Navbar_logo'>
                <img src={logo} height="33px" width="33px"/>
                <p>Eco<span>Sell</span></p>
            </div>
        </Link>
        <div className='Navbar_lastlayout'>
            <HangedButton />
            <div>
                <IconButton Icon={PiDotsNineBold} />
            </div>
            
        </div>
      </div>
    </nav>
  )
}

export default Navbar
