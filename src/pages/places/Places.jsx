import React from 'react'
import Card from '../../components/card/Card'
import Connect from '../../components/connect/Connect'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { PlacesCards } from '../../constants/CardsList'
import './Places.css'

const Places = () => {
  return (
    <div className='places'>
        <Navbar />
        <div className='cards-con'>
            {
                PlacesCards.map((img, index)=> (
                    <Card key={index} img={img} />
                ))
            }
        </div>
        <Footer />
        <Connect />
    </div>
  )
}

export default Places