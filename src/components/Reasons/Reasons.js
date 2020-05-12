import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex-grow: 1;
  border: 2px dashed ${p => p.theme.colors.lightgreen};
  border-radius: 5px;
  margin-left: 30px;
  padding: 20px;
`

const Title = styled.h3`
text-align: center;
margin-top: 0;
color: ${p => p.theme.colors.palegreen}
`

const Arguments = styled.p`
  color: ${p => p.theme.colors.lightgreen};
  max-width: 400px;
  min-width: 300px;
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
                Sitting at a desk, staring a computer screen for prolonged hours puts a strain on our body and affects our ability to
                focus on highly demanding tasks. Taking a simple break helps us regain focus and prevents exhaustion and fatigue.
            </Arguments>
            <Arguments>
                Here are some articles that give more insight into the benefits of taking regular breaks.
                <ul>
                    <li><a target="_blank" rel="noopener" href="https://www.fastcompany.com/3034928/why-you-need-to-stop-thinking-you-are-too-busy-to-take-breaks">Why you need to stop thinking you are too busy to take breaks.</a></li>
                    <li><a target="_blank" rel="noopener" href="https://www.psychologytoday.com/us/blog/changepower/201704/how-do-work-breaks-help-your-brain-5-surprising-answers">Although a bit "clickbaity", this one makes an effort to reference actual studies.</a></li>
                </ul>
            </Arguments>
        </Container>
    )
}

export default Reasons
