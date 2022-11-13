import React from 'react'
import Adventures from '../../components/adventure/Adventures'
import Connect from '../../components/connect/Connect'
import Discover from '../../components/discover/Discover'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar /> 
        <Hero />
        <Adventures />
        <Connect />
        <Discover />
        <Footer />
    </div>
  )
}

export default Home