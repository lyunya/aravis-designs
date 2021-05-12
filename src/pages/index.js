import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import ServicesSection from '../components/Services'
import SideBar from '../components/SideBar'
import PortfolioSection from '../components/Portfolio'
import ContactSection from '../components/Contact'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
      <>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </>
    )
}

export default Home
