import styled, { css } from 'styled-components'


const sharedStyles = css`
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
`

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
  width: auto;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
  position: relative;
  z-index: 1;
  overflow: visible;
  align-items: center;
  flex-direction: column;
  background-size: cover;

  @media screen and (min-width: 768px) {
    min-height: 100vh;
    height: 100%;
    padding: 50px 100px;
  }

  @media screen and (min-width: 1400px) {
    flex-direction: row;
    justify-content: center;
        align-items: flex-start;

  }
`

export const ContactContent = styled.section`
  display: flex;
  flex-direction: column;
  z-index: 3;
  order: 1;
  justify-content: flex-start;

  @media screen and (min-width: 1400px) {
    width: 40%;
    max-width: 1100px;
  } 
`

export const ContactH1 = styled.h1`
  color: #fff;
  font-size: 1.2rem;

  @media screen and (min-width: 600px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 1600px) {
    font-size: 4rem;
  }
`

export const ContactH2 = styled.h2`
  color: #fff;
  font-size: 1rem;
  margin: 10px 0 10px 0;
  text-align: center;

  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
    margin: 10px 0 0 0;
    text-align: start;
  }

  @media screen and (min-width: 1600px) {
    font-size: 2rem;
  }
`

export const ContactH3 = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;

  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
  }


  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`
export const ContactP = styled.p`
  color: #fff;
  font-size: 1.5rem;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`

export const ContactFormWrapper = styled.div`
  order: 2;
  width: 80%;
  max-width: 700px;
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`

export const ContactForm = styled.form`
  z-index: 3;
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3)

`

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  display: block;
  position: relative;
  width: 100%;
  ${sharedStyles}
`

export const Button = styled.button`
  display: block;
  background-color: #5995ef;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  width: 100px;
  margin-top: 20px;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: 'Raleway', sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`

export const ErrorMessage = styled.div`
color: red;
font-weight: 800;
margin: 0 0 40px 0;
`