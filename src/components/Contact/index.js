import React from 'react'
import { ContactContainer, ContactContent, ContactBg, ContactH1 } from './ContactElements'
import ContactBgImage from '../../images/pdx-cityscape.jpg'

const ContactSection = () => {
    return (
      <>
        <ContactContainer id='contact'>
          <ContactBg src={ContactBgImage}></ContactBg>
          <ContactContent>
            <ContactH1>Let's Talk</ContactH1>
          </ContactContent>
        </ContactContainer>
      </>
    )
}

export default ContactSection
