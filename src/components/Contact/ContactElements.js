import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 1;
  overflow: hidden;
`

export const ContactContent = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  width: 100%;
`

export const ContactBg = styled.img`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

export const ContactHeader = styled.h1`
  text-align: center;
`

export const ContactH1 = styled.h1`
  color: #fff;
  font-size: 32px;

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }

`

export const ContactH2 = styled.h1`
  color: #fff;
  font-size: 16px;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`