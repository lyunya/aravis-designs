import React, { useState } from 'react'
import { Button } from '../ButtonElement'
import { Link } from 'react-scroll'
import HeroDesktop from '../../images/hero-bg-image-2400.jpg'
import {
  HeroContainer,
  HeroDesktopBg,
  HeroContent,
  HeroH1Top,
  HeroH1Bottom,
  HeroP,
  HeroContactBtnWrapper,
  HeroServicesBtnWrapper,
  ArrowForward,
  ArrowRight,
  ArrowDown,
} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer>
      <HeroDesktopBg src={HeroDesktop}></HeroDesktopBg>
      <HeroContent>
        <HeroH1Top>Dental Websites and Marketing</HeroH1Top>
        {/* <HeroH1Bottom>for Dentists</HeroH1Bottom> */}
        <HeroP>
          Let us handle your online presence, so you can focus on your patients.
        </HeroP>
        <HeroContactBtnWrapper>
          <Button
            to='contact'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
          >
            Request a Quote {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroContactBtnWrapper>
      </HeroContent>
      <HeroServicesBtnWrapper>
        <Link
          activeClass='active'
          to='services'
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          <ArrowDown />
        </Link>
      </HeroServicesBtnWrapper>
    </HeroContainer>
  )
}

export default HeroSection
