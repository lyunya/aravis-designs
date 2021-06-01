import React from 'react'
import { ContactContainer, ContactContent, ContactBg, ContactDescription, ContactHeader, ContactH1, ContactH2 } from './ContactElements'
import ContactBgImage from '../../images/mount-hood-bg.jpg'

const ContactSection = () => {
    return (
      <>
        <ContactContainer id='contact'>
          <ContactBg src={ContactBgImage}></ContactBg>
          <ContactContent>
            <ContactHeader>
              <ContactH1>Contact Us</ContactH1>
            </ContactHeader>

            <ContactDescription>
              <ContactH2>
                Based just outside Portland, OR
                <br /> We serve dentists across the nation
              </ContactH2>
              <ContactH2>araviswebdesigns@gmail.com</ContactH2>
            </ContactDescription>
          </ContactContent>
        </ContactContainer>
      </>
    )
}

export default ContactSection
