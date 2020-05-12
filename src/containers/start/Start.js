import React from 'react'
import styled from 'styled-components'
import EncouragingMessage from '../../components/encouragingMessage/EncouragingMessage'
import { useAuth } from '../../shared/Auth'
import googleLogo from './google-logo.svg'

const StartContainer = styled.div`
  padding: 0 10px;
  width: 100%;
  height: 100%;
`

const FormContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StartButton = styled.button`
  font-weight: 600;
  margin-top: 50px;
  border: none;
  border-radius: 5px;
  font-size: 2em;
  padding: 10px 30px;
  background-color: white;
  color: ${p => p.theme.colors.darkgreen};
  cursor: pointer;
  &:focus{
    outline: none;
  }
`

const GoogleLogoContainer = styled.div`
  display: flex;
  img {
    width: 30px;
    margin-right: 20px;
  }
`

const Start = () => {

    const { signInWithPopup } = useAuth()

    return (
        <StartContainer>
            <FormContainer>
                <EncouragingMessage
                    message="I think it's important to try to be present with whatever it is you're doing. And if you can't be present, take a break."
                    author={'Emily Giffin'} authorLink={'https://en.wikipedia.org/wiki/Emily_Giffin'}/>
                <StartButton onClick={signInWithPopup}>
                    <GoogleLogoContainer>
                        <img src={googleLogo} alt=""/>
                        <div>Continue with Google</div>
                    </GoogleLogoContainer>
                </StartButton>
            </FormContainer>
        </StartContainer>
    )
}

export default Start
