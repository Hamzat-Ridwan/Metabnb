import React from 'react'
import { HomeCards } from '../../constants/CardsList'
import Card from '../card/Card'
import './Adventures.css'

const Adventures = () => {
  return (
    <div className='adventures'>
        <h1>Inspiration for your next adventure</h1>
        <div className='cards-con'>
            {
                HomeCards.map((url, index)=>(
                    <Card key={index} img={url} />
                ))
            }
        </div>
    </div>
  )
}

export default Adventures