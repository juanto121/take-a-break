import React from 'react'
import styled from 'styled-components'

const MessageContainer = styled.h1`
  color: ${p => p.theme.colors.palegreen};
  text-align: center;
  max-width: 500px;
  margin-bottom: 50px;
`

const Message = styled.div`
text-align: start;
`

const Author = styled.div`
  font-size: 0.8em;
  text-align: end;
  color: ${p=>p.theme.colors.lightgreen}
`

const EncouragingMessage = ({ message, author, authorLink }) => {
    return (
        <MessageContainer>
            <Message>
                {message}
            </Message>
            <Author>
                {author}
            </Author>
        </MessageContainer>
    )
}

export default EncouragingMessage
