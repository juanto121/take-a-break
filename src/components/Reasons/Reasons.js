import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex-grow: 1;
  border: 2px dashed ${p => p.theme.colors.lightgreen};
  border-radius: 5px;
  padding: 20px;
`

const Title = styled.h3`
text-align: center;
margin-top: 0;
color: ${p => p.theme.colors.palegreen}
`

const Arguments = styled.p`
  color: ${p => p.theme.colors.lightgreen};
  font-weight: 400;
  a {
    color: ${p => p.theme.colors.palegreen}
  }
`

const Reasons = () => {
    return (
        <Container>
            <Title>Why am I doing this?</Title>
            <Arguments>
                Sitting at your desk, staring a computer screen for prolonged hours puts a strain on our body and affects our ability to
                focus on highly demanding tasks. Taking a simple break helps us regain focus and prevents exhaustion and fatigue.
            </Arguments>
            <Arguments>
              <a target="_blank" rel="noopener" href="https://www.fastcompany.com/3034928/why-you-need-to-stop-thinking-you-are-too-busy-to-take-breaks">Why you need to stop thinking you are too busy to take breaks.</a>
            </Arguments>
        </Container>
    )
}

export default Reasons
