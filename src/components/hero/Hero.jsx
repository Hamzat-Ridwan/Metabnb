import React from 'react'
import Image1 from '../../assets/image1.jpg'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.svg'
import Image4 from '../../assets/image4.svg'
import mbtoken from '../../assets/mbtoken.svg'
import metamask from '../../assets/metamask.svg'
import opensea from '../../assets/opensea.svg'

import './Hero.css'

const Hero = () => {
  return (
    <>
    <main>
        <div className='texts'>
            <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
            <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <div className='search'>
                <input type='search' placeholder='Search for location' />
                <button>Search</button>
            </div>
        </div>
        <div className='images'>
            <div className='col-1'>
                <img src={Image1} alt='img' />
                <img src={Image2} alt='img' />
            </div>
            <div className='col-2'>
                <img src={Image3} alt='img' />
                <img src={Image4} alt='img' />
            </div>
        </div>
    </main>
    <div className='bottom-stipe'>
        <img src={mbtoken} alt='com' />
        <img src={metamask} alt='com' />
        <img src={opensea} alt='com' />
    </div>
    </>
  )
}

export default Hero