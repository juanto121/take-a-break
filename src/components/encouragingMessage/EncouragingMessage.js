import React from 'react'
import styled from 'styled-components'

const MessageContainer = styled.h1`
  color: ${p=> p.theme.colors.palegreen};
  text-align: center;
  font-weight: 900;
  max-width: 500px;
  margin-bottom: 50px;
`

const EncouragingMessage = ({ message }) => {
    return (
        <MessageContainer>
            { message }
        </MessageContainer>
    )
}

export default EncouragingMessage
