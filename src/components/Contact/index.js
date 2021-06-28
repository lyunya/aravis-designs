import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import {
  ContactContainer,
  ContactContent,
  ContactFormWrapper,
  ContactForm,
  ContactH1,
  ContactH2,
  ContactH3,
  Input,
  Button,
  Textarea,
  ErrorMessage,
} from './ContactElements'
import ContactBgImage from '../../images/mount-hood-bg.jpg'

const initialState = {
  name: '',
  email: '',
  message: '',
}

const ContactSection = () => {
  const [state, setState] = useState(initialState)
  const [error, setError] = useState('')
  const [verified, setVerified] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state)

    for (let key in state) {
      if (state[key] === '') {
        setError(`Please make sure to provide your ${key}`)
        return
      }
    }
    setError('')
    console.log('clicked!')
  }

  const handleInput = e => {
    const input = e.currentTarget.name
    const value = e.currentTarget.value

    setState((prev) => ({
      ...prev,
      [input]: value,
    }))
  }

  const handleVerify = () => setVerified(true)

  return (
    <>
      <ContactContainer
        id='contact'
        style={{
          backgroundImage: `url(${ContactBgImage})`,
        }}
      >
        <ContactContent>
          <ContactH1>
            Based just outside <br /> Portland, OR
          </ContactH1>
          <ContactH2>We serve dentists across the nation</ContactH2>
          {/* <ContactP>araviswebdesigns@gmail.com</ContactP> */}
        </ContactContent>
        <ContactFormWrapper>
          <ContactForm onSubmit={handleSubmit}>
            <ContactH3>Contact Form</ContactH3>
            <label htmlFor='name'>Name</label>
            <Input
              type='text'
              name='name'
              value={state.name}
              onChange={handleInput}
              required='required'
            />
            <label htmlFor='email'>Email</label>
            <Input
              type='email'
              name='email'
              value={state.email}
              onChange={handleInput}
              required='required'
            />
            <label htmlFor='message'>Type your Message...</label>
            <Textarea
              name='message'
              value={state.message}
              onChange={handleInput}
            />
            {error && (
              <ErrorMessage>
                <p>{error}</p>
              </ErrorMessage>
            )}
            <ReCAPTCHA sitekey="6LeQvGEbAAAAAKK5VglmRp2lKjHvutUnlrGrs1Kp" onChange={handleVerify}/>,
            <Button disabled={!verified}>Submit</Button>
          </ContactForm>
        </ContactFormWrapper>
      </ContactContainer>
    </>
  )
}

export default ContactSection
