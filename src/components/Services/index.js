import React from 'react';
import { Button } from 'react-scroll'
import { ServicesContainer, ServicesWrapper, ServiceRow, Column1, Column2, Service, Devices, Search, Social } from './ServicesElements';

const ServicesSection = () => {
  return (
    <>
      <ServicesContainer>
        <ServicesWrapper>
          <ServiceRow>
            <Column1>
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
            </Column1>
            <Column2></Column2>
          </ServiceRow>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default ServicesSection;
