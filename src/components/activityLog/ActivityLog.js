import React from 'react'
import styled from 'styled-components'

const ActivityLogContainer = styled.div`
  margin-bottom: 30px;
`
const Dots = styled.div`
  max-width: 250px;
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: repeat(auto-fill, 28px);
`

const Title = styled.h3`
  margin-top: 0;
  color: ${p => p.theme.colors.palegreen}
`

let dates = []
for (let i = 0; i < 30; i++) {
    dates.push({ order: i })
}

const ActivityLog = () => {
    const dots = dates.map((date, i) => {
        return (<ActivityDot key={i}/>)
    })
    return (
        <ActivityLogContainer>
            <Title>
                Activity log
            </Title>
            <Dots>
                {dots}
            </Dots>
        </ActivityLogContainer>
    )
}

const ActivityDotContainer = styled.div`
  width: 28px;
  height: 28px;
  background-color: ${p => p.theme.colors.lightgreen};
  border-radius: 50%;
`

const ActivityDot = () => {
    return (
        <ActivityDotContainer>

        </ActivityDotContainer>
    )
}

export default ActivityLog
