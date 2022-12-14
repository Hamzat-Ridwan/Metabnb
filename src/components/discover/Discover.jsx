import React from 'react'
import Stack from '../../assets/stack.svg'
import './Discover.css'

const Discover = () => {
  return (
    <section className='discover'>
        <div className='content'>
            <h2>Metabnb NFTs</h2>
            <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <button>Learn more</button>
        </div>
        <div className='img'>
            <img src={Stack} alt='img-stack' />
        </div>
    </section>
  )
}
 
export default Discover