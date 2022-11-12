import React, {useContext, useEffect, useRef} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ConnectContext } from '../../context/useConnect'
import {ReactComponent as Close} from '../../assets/x.svg'
import { ReactComponent as Forward} from '../../assets/forward.svg'
import {ReactComponent as Fox} from '../../assets/fox.svg'
import { ReactComponent as Wallet} from '../../assets/wallet.svg'
import './Connect.css'

const Connect = () => {
    const {showConnect, setShowConnect} = useContext(ConnectContext)
    let menuRef = useRef()
    useEffect(()=>{
        let handler = e =>{
            if(!menuRef.current.contains(e.target)){
                setShowConnect(false)
            }
        }

        document.addEventListener('mousedown', handler)
        return () =>{
            document.removeEventListener('mousedown', handler)
        }
    })
  return (
    <>
    <AnimatePresence>
    {showConnect &&
    <motion.div className='connect' 
        key='con'
        initial={{scale: 1, opacity: 1}}
        exit={{ opacity: 0, transition: {duration: .2}}}
    >
        <motion.div className='connect-card' ref={menuRef}
            key='box'
            initial={{scale: .6, opacity: .6}}
            exit={{scale: .6, opacity: .6, transition: {duration: .4}}}
            animate={{scale: 1, opacity: 1}}
            transition={{type: 'spring', duration: .5}}
        >
            <div className='head'>
                <h3>Connect Wallet</h3>
                <Close onClick={()=> setShowConnect(false)}/>
            </div>
            <div className='container'>
                <p>Choose your preferred wallet:</p>
                <div className='option'>
                    <span>
                        <Fox />
                        <h4>Metamask</h4>
                    </span>
                    <Forward />
                </div>
                <div className='option'>
                    <span>
                        <Wallet />
                        <h4>WalletConnect</h4>
                    </span>
                    <Forward />
                </div>
            </div>
        </motion.div>
    </motion.div>
    }
    </AnimatePresence>
    </>
  )
}

export default Connect