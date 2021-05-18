import React from 'react';
import ContentTeam from '../../images/content-team.svg'
import {
  ServicesContainer,
  ServicesWrapper,
  DescriptionWrapper,
  Service,
  DevicesSmall,
  DevicesLarge,
  ColorPaletteSmall,
  ColorPaletteLarge,
  DescriptionH1,
  DescriptionP,
  ContentImage,
  SearchSmall,
  SearchLarge,
  ChatSmall,
  ChatLarge,
  AnalyticsLarge,
  AnalyticsSmall,
  ToolsSmall,
  ToolsLarge,
} from './ServicesElements';

const ServicesSection = () => {
  return (
    <>
      <ServicesContainer id='services'>
        <ServicesWrapper>
          <Service>
            <DevicesSmall />
            <DevicesLarge />
            Responsive: Mobile, Tablet, and Desktop
          </Service>
          <Service>
            <SearchSmall />
            <SearchLarge />
            Optimized: SEO-Friendly
          </Service>
          <Service>
            <ChatSmall />
            <ChatLarge />
            Social Media Management
          </Service>
          <Service>
            <ColorPaletteSmall />
            <ColorPaletteLarge />
            Branding/Graphic Design
          </Service>
          <Service>
            <AnalyticsSmall />
            <AnalyticsLarge />
            Analytics Traffic Report
          </Service>
          <Service>
            <ToolsSmall />
            <ToolsLarge />
            Website Maintenance
          </Service>
        </ServicesWrapper>
        <DescriptionWrapper>
          <DescriptionH1>Modern Custom Website Design</DescriptionH1>
          <DescriptionP>
            We Specialize in Custom Websites and Also Offer a Multitude of
            Additional Services To Manage and Improve the Online Presence for
            Your Dental Practice
          </DescriptionP>
          <ContentImage src={ContentTeam} />
        </DescriptionWrapper>
      </ServicesContainer>
    </>
  )
};

export default ServicesSection;
