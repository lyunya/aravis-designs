import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
  z-index: 1;
  overflow: visible;
`

export const ContactContent = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  width: 100%;
`


export const ContactDescription = styled.div`
  padding-left: 5%;
`

export const ContactBg = styled.img`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const ContactHeader = styled.h1`
  text-align: center;
`

export const ContactH1 = styled.h1`
  color: #fff;
  font-size: 2rem;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 1600px) {
    font-size: 4rem;
  }
`

export const ContactH2 = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`