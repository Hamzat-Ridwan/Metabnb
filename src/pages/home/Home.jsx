import React from 'react'
import Connect from '../../components/connect/Connect'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar /> 
        <Hero />
        <Connect />
    </div>
  )
}

export default Home