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
    <div className='footer'>
        <div >
            <Meta />
            <div>
                <Fb />
                <Inst />
                <Twitter />
            </div>
            <div className='copy'>
                <Copy />
                <p>2022 Metabnb</p>
            </div>
        </div>
        <div>
            <h3>Community</h3>
            <ul>
                <li><Link></Link></li>
                <li><Link></Link></li>
                <li><Link></Link></li>
                <li><Link></Link></li>
            </ul>
        </div>
        <div>
            <h3>Places</h3>
            <ul>
                <li><Link></Link></li>
                <li><Link></Link></li>
                <li><Link></Link></li>
                <li><Link></Link></li>
            </ul>
        </div>
        <div>
            <h3>About us</h3>
            <ul>
                <li><Link></Link></li>
                <li><Link></Link></li>
                <li><Link></Link></li>
                <li><Link></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer