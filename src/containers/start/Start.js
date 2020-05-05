import React from 'react'
import styled from 'styled-components'
import EncouragingMessage from '../../components/encouragingMessage/EncouragingMessage'
import { withRouter } from 'react-router-dom'

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

const EmailInput = styled.input`
  background-color: ${p => p.theme.colors.lightgreen};
  border: none;
  border-radius: 5px;
  font-size: 2em;
  color: white;
  padding: 10px 0;
  
  &:focus{
    outline: none;
  }
  
  &::placeholder {
    padding-left: 10px;
    color: ${p => p.theme.colors.darkgreen};
  }
  
  width: 100%;
  max-width: 500px;
`

const StartButton = styled.button`
  font-weight: 600;
  margin-top: 50px;
  border: none;
  border-radius: 5px;
  font-size: 2em;
  padding: 10px 30px;
  background-color: ${p => p.theme.colors.palegreen};
  color: ${p => p.theme.colors.darkgreen};
  cursor: pointer;
  &:focus{
    outline: none;
  }
`


const Start = ({ history }) => {
    return (
        <StartContainer>
            <FormContainer>
                <EncouragingMessage message="This should be a random encouragement message"/>
                <EmailInput placeholder="fulanito@aifund.ai"/>
                <StartButton onClick={ () => history.push('/break-session')}>Start!</StartButton>
            </FormContainer>
        </StartContainer>
    )
}

export default withRouter(Start)
