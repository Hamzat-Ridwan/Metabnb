import React, {useContext, useEffect, useRef} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ConnectContext } from '../../context/useConnect'
import close from '../../assets/x.svg'
import forward from '../../assets/forward.svg'
import fox from '../../assets/fox.svg'
import wallet from '../../assets/wallet.svg'
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
        // exit={{ opacity: .6}}
    >
        {/* <AnimatePresence> */}
        <motion.div className='connect-card' ref={menuRef}
            key='box'
            initial={{scale: .6, opacity: .6}}
            exit={{scale: .8, opacity: .6, transition: {duration: .2}}}
            animate={{scale: 1, opacity: 1}}
            transition={{type: 'spring', duration: .5}}
        >
            <div className='head'>
                <h3>Connect Wallet</h3>
                <img src={close} alt='close' onClick={()=> setShowConnect(false)}/>
            </div>
            <div className='container'>
                <p>Choose your preferred wallet:</p>
                <div className='option'>
                    <span>
                        <img src={fox} alt='fox' />
                        <h4>Metamask</h4>
                    </span>
                    <img src={forward} alt='forward' />
                </div>
                <div className='option'>
                    <span>
                        <img src={wallet} alt='wallet' />
                        <h4>WalletConnect</h4>
                    </span>
                    <img src={forward} alt='forward' />
                </div>
            </div>
        </motion.div>
        {/* </AnimatePresence> */}
    </motion.div>
    }
    </AnimatePresence>
    </>
  )
}

export default Connect