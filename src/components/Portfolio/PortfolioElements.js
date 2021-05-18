import styled from 'styled-components'

export const PortfolioContainer = styled.div`
  background-color: #b9d8f0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
  justify-content: center;
  padding: 60px 0;

  @media screen and (min-width: 1400px) {
    flex-direction: row;
    height: 100vh;
    padding: 0;
  }
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  order: 2;
  justify-content: center;
  padding: 0 20px;

  @media screen and (min-width: 1400px) {
    order: 1;
    width: 50%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: 90px;
  }
`

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  order: 1;
  width: 60%;
  max-width: 900px;
  justify-content: center;
  margin-left: 25%;

  @media screen and (min-width: 1400px) {
    order: 2;
    height: 100%;
    width: 50%;
    padding-top: 0px;
    margin-right: 90px;
    margin-left: 10%;
  }
`

export const DescriptionH1 = styled.h1`
  color: #000000;
  font-size: 36px;

  @media screen and (max-width: 1400px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const DescriptionP = styled.p`
  margin-top: 24px;
  color: black;
  font-size: 20px;
  text-align: left;

  @media screen and (max-width: 1400px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const PortfolioSlide = styled.div`
    max-width: 100%;
    height: auto;
`

export const Portfolioimg = styled.img`
`
