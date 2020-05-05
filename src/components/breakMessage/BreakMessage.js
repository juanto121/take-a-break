import React from 'react'
import styled from 'styled-components'

const MessageTitle = styled.h2`
  flex-grow: 1;
  justify-self: flex-start;
  color: ${p => p.theme.colors.palegreen}
`

const BreakMessage = ({message}) => {
    return (
        <MessageTitle>
            {message}
        </MessageTitle>
    )
}

export default BreakMessage
