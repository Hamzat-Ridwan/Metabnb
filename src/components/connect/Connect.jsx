import React, {useContext, useState} from 'react'
import { ConnectContext } from '../../context/useConnect'
import close from '../../assets/x.svg'
import forward from '../../assets/forward.svg'
import fox from '../../assets/fox.svg'
import wallet from '../../assets/wallet.svg'
import './Connect.css'

const Connect = () => {
    const {showConnect, setShowConnect} = useContext(ConnectContext)
  return (
    <>
    {showConnect &&
    <div className='connect' >
        <div className='connect-card'>
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
        </div>
    </div>
    }
    </>
  )
}

export default Connect