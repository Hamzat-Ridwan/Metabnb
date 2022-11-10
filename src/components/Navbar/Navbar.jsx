import React from 'react'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={Logo} alt='logo' className='logo' />
        </div>
        <ul>
            <li><Link >Home</Link></li>
            <li><Link >Place to stay</Link></li>
            <li><Link >NFTs</Link></li>
            <li><Link >Community</Link></li>
        </ul>
        <button>Connect wallet</button>
        <div>
            <img />
        </div>
    </nav>
  )
}

export default Navbar