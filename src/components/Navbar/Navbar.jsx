import React, {useContext, useState, useEffect, useRef} from 'react'
import { ConnectContext } from '../../context/useConnect'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../../assets/logo.svg'
import {HiMenuAlt3} from 'react-icons/hi'
import {RiCloseFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const {setShowConnect, showConnect} = useContext(ConnectContext)
    let menuRef = useRef()
    useEffect(()=>{
        let handler = e =>{
            if(!menuRef.current.contains(e.target)){
                setToggle(false)
            }
        }

        document.addEventListener('mousedown', handler)
        return () =>{
            document.removeEventListener('mousedown', handler)
        }
    })
  return (
    <nav>
        <div>
            <img src={Logo} alt='logo' className='logo' />
        </div>
        <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/places'>Place to stay</Link></li>
            <li><Link >NFTs</Link></li>
            <li><Link >Community</Link></li>
        </ul>
        <button onClick={()=> {setShowConnect(true)}}>Connect wallet</button>
        <div className='menu'>
            <HiMenuAlt3 onClick={()=> setToggle(true)}/>
            <AnimatePresence>
            {toggle && (
                <motion.div
                    key='side'
                    initial={{x: '100vw'}}
                    exit={{x: '100vw', transition: {duration: .1}}}
                    animate={{x: 10}}
                    transition={{type: 'spring', duration: .5}}
                    ref={menuRef}
                >
                    <RiCloseFill onClick={()=> setToggle(false)} />
                    <ul>
                        <li><Link to='/' onClick={()=> setToggle(false)}>Home</Link></li>
                        <li><Link to='/places' onClick={()=> setToggle(false)}>Place to stay</Link></li>
                        <li><Link onClick={()=> setToggle(false)}>NFTs</Link></li>
                        <li><Link onClick={()=> setToggle(false)}>Community</Link></li>
                    </ul>
                    <button onClick={()=> {setToggle(false), setShowConnect(true)}}>Connect wallet</button>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    </nav>
  )
}

export default Navbar