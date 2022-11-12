import React, {useContext, useState} from 'react'
import { ConnectContext } from '../../context/useConnect'
import { motion } from 'framer-motion'
import Logo from '../../assets/logo.svg'
import {HiMenuAlt3} from 'react-icons/hi'
import {RiCloseFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const {setShowConnect, showConnect} = useContext(ConnectContext)
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
        <button onClick={()=> {setShowConnect(true), console.log(showConnect)}}>Connect wallet</button>
        <div className='menu'>
            <HiMenuAlt3 onClick={()=> setToggle(true)}/>
            {toggle && (
                <motion.div
                    initial={{x: '100vw'}}
                    animate={{x: 10}}
                    transition={{type: 'spring', duration: .5}}
                >
                    <RiCloseFill onClick={()=> setToggle(false)} />
                    <ul>
                        <li><Link onClick={()=> setToggle(false)}>Home</Link></li>
                        <li><Link onClick={()=> setToggle(false)}>Place to stay</Link></li>
                        <li><Link onClick={()=> setToggle(false)}>NFTs</Link></li>
                        <li><Link onClick={()=> setToggle(false)}>Community</Link></li>
                    </ul>
                    <button onClick={()=> {setToggle(false), setShowConnect(true)}}>Connect wallet</button>
                </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar