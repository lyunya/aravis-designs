import styled from 'styled-components';
import {
  MdKeyboardArrowRight,
  MdArrowForward,
  MdKeyboardArrowDown,
} from 'react-icons/md';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: auto;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
  position: relative;
  z-index: 1;
  overflow: visible;

  @media screen and (min-width: 768px) {
    min-height: 100vh;
  }
`

export const HeroDesktopBg = styled.img`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`


export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1Top = styled.h1`
  color: #000;
  font-size: 2rem;
  text-align: center;
  font-family: 'Poiret One', cursive;
  color: #d47a38;

  @media screen and (min-width: 480px) {
    font-size: 4rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 5rem;
  }
`

export const HeroH1Bottom = styled.h1`
  color: #1e90ff;
  font-size: 2rem;
  text-align: center;
  font-family: 'Poiret One', cursive;
  color: #d47a38;

  @media screen and (min-width: 480px) {
    font-size: 4rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 5rem;
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #4d3100;
  font-size: 1rem;
  text-align: left;
  max-width: 600px;

  @media screen and (min-width: 480px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`

export const HeroContactBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;


export const HeroServicesBtnWrapper = styled.div`
  z-index: 999;
  position: absolute;
  bottom: 4vh;
  display: none;

  &:hover {
    animation: bounce 1.5s;
    animation-iteration-count: infinite;
  }

  @keyframes bounce {
    0%,
    25%,
    50%,
    75%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-12px);
    }
  }

  @media screen and (min-width: 480px) and (min-height: 700px) {
    display: block;
  }
`


export const ArrowDown = styled(MdKeyboardArrowDown)`
  font-size: 7rem;
  color: #2a527b;
  
`


