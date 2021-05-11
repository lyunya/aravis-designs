import React from 'react';
import { Button } from 'react-scroll';
import ContentTeam from '../../images/content-team.svg'
import {
  ServicesContainer,
  ServicesWrapper,
  DescriptionWrapper,
  Service,
  Devices,
  Search,
  Social,
  Branding,
  Analytics,
  Tools,
  DescriptionH1,
  DescriptionP,
  ContentImage
} from './ServicesElements';

const ServicesSection = () => {
  return (
    <>
      <ServicesContainer>
        <ServicesWrapper>
          <Service>
            <Devices />
            Responsive: Mobile, Tablet, and All-Device Friendly
          </Service>
          <Service>
            <Search />
            Optimized: SEO-Friendly in its Code and Content Creation
          </Service>
          <Service>
            <Social />
            Social Media Management - Facebook, Yelp, Twitter
          </Service>
          <Service>
            <Branding />
            Branding/Graphic Design
          </Service>
          <Service>
            <Analytics />
            Analytics Traffic Report
          </Service>
          <Service>
            <Tools />
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
  );
};

export default ServicesSection;
