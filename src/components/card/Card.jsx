import React from 'react'
import {ReactComponent as Star} from '../../assets/star.svg'
import './Card.css'

const Card = ({img}) => {
  return (
    <div className='card'>
        <img src={img} alt='card' />
        <div>
            <p>Desert king</p>
            <h4>1MBT per night</h4>
        </div>
        <div>
            <p>2345km away</p>
            <p>available for 2weeks stay</p>
        </div>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
    </div>
  )
}

export default Card