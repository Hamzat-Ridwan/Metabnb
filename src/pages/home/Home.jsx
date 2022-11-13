import React from 'react'
import Adventures from '../../components/adventure/Adventures'
import Connect from '../../components/connect/Connect'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar /> 
        <Hero />
        <Adventures />
        <Connect />
    </div>
  )
}

export default Home