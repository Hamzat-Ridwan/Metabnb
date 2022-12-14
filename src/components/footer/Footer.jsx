import React from 'react'
import { ReactComponent as Meta } from '../../assets/metabnb.svg'
import { ReactComponent as Fb } from '../../assets/fb.svg'
import { ReactComponent as Inst } from '../../assets/inst.svg'
import { ReactComponent as Twitter } from '../../assets/twitter.svg'
import { ReactComponent as Copy } from '../../assets/copy.svg'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='wrap'>
    <div className='footer'>
        <div >
            <Meta className='meta' />
            <div className='socials'>
                <Fb />
                <Inst />
                <Twitter />
            </div>
        </div>
        <div>
            <h3>Community</h3>
            <ul>
                <li><Link>NFT</Link></li>
                <li><Link>Tokens</Link></li>
                <li><Link>Landlords</Link></li>
                <li><Link>Discord</Link></li>
            </ul>
        </div>
        <div>
            <h3>Places</h3>
            <ul>
                <li><Link>Castle</Link></li>
                <li><Link>Farms</Link></li>
                <li><Link>Beach</Link></li>
                <li><Link>Learn more</Link></li>
            </ul>
        </div>
        <div>
            <h3>About us</h3>
            <ul>
                <li><Link>Road map</Link></li>
                <li><Link>Creators</Link></li>
                <li><Link>Career</Link></li>
                <li><Link>Contact us</Link></li>
            </ul>
        </div>
    </div>
        <div className='copy'>
            <Copy />
            <p>2022 Metabnb</p>
        </div>
    </div>
  )
}

export default Footer