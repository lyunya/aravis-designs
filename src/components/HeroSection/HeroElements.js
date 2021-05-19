import styled from 'styled-components';
import {
  MdKeyboardArrowRight,
  MdArrowForward,
  MdKeyboardArrowDown,
  MdArrowDownward
} from 'react-icons/md';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
  position: relative;
  z-index: 1;
  overflow: hidden;
`

export const HeroDesktopBg = styled.img`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;

  @media screen and (min-width: 768px) {
    display: unset;
  }
`

export const HeroMobileBg = styled.img`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: none;
  }
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
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: black;

  @media screen and (min-width: 480px) {
    font-size: 4rem;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    font-size: 5rem;
  }
`

export const HeroH1Bottom = styled.h1`
  color: #1e90ff;
  font-size: 2rem;
  text-align: center;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;

  @media screen and (min-width: 480px) {
    font-size: 4rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 5rem;
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: black;
  font-size: 1rem;
  text-align: left;
  max-width: 600px;

  @media screen and (min-width: 480px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroContactBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroServicesBtnWrapper = styled.div`
  z-index: 999;
  position: absolute;
  bottom: 24px;
  display: flex;
  flex-direction: column;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
  font-size: 60px;
  color: white;
`;

export const ArrowDownward = styled(MdArrowDownward)`
  font-size: 60px;
  color: white;
`;
