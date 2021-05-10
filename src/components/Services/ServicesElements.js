import styled from 'styled-components'
import { MdDevices, MdSearch, MdChatBubble, MdChat } from 'react-icons/md';

export const ServicesContainer = styled.div`
  background-color: #e6d5cd;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ServicesWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 80%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`

export const ServiceRow = styled.div`
display: grid;
grid-auto-columns: 2fr, 1fr;
align-items: center;
`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
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
`

export const Devices = styled(MdDevices, MdSearch)`
  margin-left: 8px;
  margin-right: 15px;
  font-size: 20px;
`;

export const Search = styled(MdSearch)`
  margin-left: 8px;
  margin-right: 15px;
  font-size: 20px;
`;

export const Social = styled(MdChatBubble)`
  margin-left: 8px;
  margin-right: 15px;
  font-size: 20px;
`;