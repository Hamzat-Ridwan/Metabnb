import React from 'react'
import Card from '../../components/card/Card'
import Connect from '../../components/connect/Connect'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { PlacesCards } from '../../constants/CardsList'
import { ReactComponent as Setting } from '../../assets/setting.svg'
import './Places.css'

const Places = () => {
  return (
    <div className='places'>
        <Navbar />
        <div className='filters'>
            <div className='texts'>
                <p>Restaurant</p>
                <p>Cottage</p>
                <p>Castle</p>
                <p>Fantastic city</p>
                <p>Beach</p>
                <p>Carbins</p>
                <p>Off-grid</p>
                <p>Farm</p>
            </div>
            <div className='setting'>
                <p>Location</p>
                <Setting />
            </div>
        </div>
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