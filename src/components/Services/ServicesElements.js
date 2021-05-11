import styled from 'styled-components';
import {
  Devices32,
  Chat32,
  Search32,
  ColorPalette32,
  Analytics32,
  Tools32,
} from '@carbon/icons-react';

export const ServicesContainer = styled.div`
  background-color: #e6d5cd;
  display: flex;
  flex-direction: row;
  height: 100vh;
  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100%;
  width: 50%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: 90px;
  margin-top: 60px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100%;
  width: 50%;
  max-width: 1100px;
  margin-right: 90px;
  margin-left: auto;
  margin-top: 60px;
`;

export const Service = styled.div`
  display: block;
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  color: #000000;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Devices = styled(Devices32)`
  margin-left: 8px;
  margin-right: 15px;
  font-size: 24px;
`;

export const Search = styled(Search32)`
  margin-left: 8px;
  margin-right: 15px;
  font-size: 24px;
`;

export const Social = styled(Chat32)`
  margin-left: 8px;
  margin-right: 15px;
  font-size: 24px;
`;

export const Branding = styled(ColorPalette32)`
  margin-left: 8px;
  margin-right: 15px;
  font-size: 24px;
`;

export const Analytics = styled(Analytics32)`
  margin-left: 8px;
  margin-right: 15px;
  font-size: 24px;
`;

export const Tools = styled(Tools32)`
  margin-left: 8px;
  margin-right: 15px;
  font-size: 24px;
`;

export const DescriptionH1 = styled.h1`
  color: #000000;
  font-size: 36px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;


export const DescriptionP = styled.p`
  margin-top: 24px;
  color: black;
  font-size: 20px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ContentImage = styled.img`
  width: 80%;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
`