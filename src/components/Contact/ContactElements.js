import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  z-index: 1;
`

export const ContactContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`

export const ContactBg = styled.img`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

export const ContactH1 = styled.h1`
  color: #fff;
  font-size: 56px;
  
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`