import React from 'react'
import { ContactContainer, ContactContent, ContactBg, ContactHeader, ContactH1, ContactH2 } from './ContactElements'
import ContactBgImage from '../../images/pdx-cityscape.jpg'

const ContactSection = () => {
    return (
      <>
        <ContactContainer id='contact'>
          <ContactBg src={ContactBgImage}></ContactBg>
          <ContactContent>
            <ContactHeader>
              <ContactH1>Contact Us</ContactH1>
            </ContactHeader>

            <ContactH2>
              Based just outside Portland, OR
              <br /> We serve dentists across the nation
            </ContactH2>
            <ContactH2>araviswebdesigns@gmail.com</ContactH2>
          </ContactContent>
        </ContactContainer>
      </>
    )
}

export default ContactSection
