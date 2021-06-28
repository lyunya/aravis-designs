import { useState } from 'react'
import {
  ContactContainer,
  ContactContent,
  ContactFormWrapper,
  ContactForm,
  ContactH1,
  ContactH2,
  ContactH3,
  ContactP,
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
  }

  const handleInput = e => {
    const input = e.currentTarget.name
    const value = e.currentTarget.value

    setState((prev) => ({
      ...prev,
      [input]: value,
    }))
  }

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
            <Button>Submit</Button>
          </ContactForm>
        </ContactFormWrapper>
      </ContactContainer>
    </>
  )
}

export default ContactSection
