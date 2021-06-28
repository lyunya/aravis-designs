import React from 'react'
import { PortfolioContainer, DescriptionWrapper, WorkWrapper, DescriptionH1, DescriptionP, PortfolioSlide, Portfolioimg} from './PortfolioElements.js'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Ponderosa from '../../images/ponderosa.png'
import TheDalles from '../../images/thedalles.png'
import Rebecca from '../../images/rebecca.png'


const PortfolioSection = () => {
    return (
      <>
        <PortfolioContainer id='portfolio'>
          <DescriptionWrapper>
            <DescriptionH1>Our Work</DescriptionH1>
            <DescriptionP>
              For over a decade, we have provided small to medium sized
              businesses with websites that professionally, effectively, and
              uniquely promote their business.
            </DescriptionP>

            <DescriptionP>
              All of our Websites are Client-Owned, Built on a Non-Proprietary
              Platform.
            </DescriptionP>
            <DescriptionP>
              We are here to build you an exceptional website to last (inside
              and out) and are here to support you managing, maintaining,
              improving upon, and updating it when needed.
            </DescriptionP>
          </DescriptionWrapper>
          <WorkWrapper>
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showArrows={false}
              showThumbs={false}
            >
              <PortfolioSlide>
                <Portfolioimg src={Ponderosa} />
              </PortfolioSlide>
              <PortfolioSlide>
                <Portfolioimg src={TheDalles} />
              </PortfolioSlide>
              <PortfolioSlide>
                <Portfolioimg src={Rebecca} />
              </PortfolioSlide>
            </Carousel>
          </WorkWrapper>
        </PortfolioContainer>
      </>
    )
}

export default PortfolioSection
