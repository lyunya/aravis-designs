import styled from 'styled-components';
import {
  Devices16,
  Devices32,
  Chat16,
  Chat32,
  Search16,
  Search32,
  ColorPalette16,
  ColorPalette32,
  Analytics16,
  Analytics32,
  Tools16,
  Tools32,
} from '@carbon/icons-react';

export const ServicesContainer = styled.div`
  background-color: #f4ebd0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  padding-top: 30px;

  @media screen and (min-width: 1400px) {
    flex-direction: row;
    padding-top: 0;
  }
`

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  order: 2;
  z-index: 1;
  height: 100%;
  justify-content: center;

  @media screen and (min-width: 1400px) {
    order: 1;
    width: 50%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: 90px;
  }
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
  z-index: 1;
  width: 60%;
  max-width: 1100px;
  justify-content: center;

  @media screen and (min-width: 1400px) {
    order: 2;
    height: 100%;
    width: 50%;
    margin-right: 90px;
    margin-left: 10%;
  }
`

export const Service = styled.div`
  display: block;
  padding-top: 0;
  padding-bottom: 18px;
  color: #000000;
  font-size: 14px;
  line-height: 12px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 18px;
  }

  @media screen and (min-width: 1400px) {
    font-size: 18px;
    line-height: 18px;
    padding-bottom: 60px;
  }
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const DevicesSmall = styled(Devices16)`
  display: inline;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 8px;
  }
`

export const DevicesLarge = styled(Devices32)`
  display: none;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    display: inline;
    margin-left: 8px;
  }
`

export const ChatSmall = styled(Chat16)`
  display: inline;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 8px;
  }
`

export const ChatLarge = styled(Chat32)`
  display: none;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    display: inline;
    margin-left: 8px;
  }
`
export const SearchSmall = styled(Search16)`
  display: inline;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 8px;
  }
`

export const SearchLarge = styled(Search32)`
  display: none;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    display: inline;
    margin-left: 8px;
  }
`

export const ColorPaletteSmall = styled(ColorPalette16)`
  display: inline;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 8px;
  }
`

export const ColorPaletteLarge = styled(ColorPalette32)`
  display: none;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    display: inline;
    margin-left: 8px;
  }
`

export const AnalyticsSmall = styled(Analytics16)`
  display: inline;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 8px;
  }
`

export const AnalyticsLarge = styled(Analytics32)`
  display: none;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    display: inline;
    margin-left: 8px;
  }
`

export const ToolsSmall = styled(Tools16)`
  display: inline;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 8px;
  }
`

export const ToolsLarge = styled(Tools32)`
  display: none;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    display: inline;
    margin-left: 8px;
  }
`


export const DescriptionH1 = styled.h1`
  color: #000000;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;


export const DescriptionP = styled.p`
  margin-top: 24px;
  color: black;
  font-size: 16px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ContentImage = styled.img`
  width: 100%;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;