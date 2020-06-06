import React from 'react'
import styled from 'styled-components'

const KICK_OFF_DATE = new Date("2020-05-12T05:00:00.000Z")

const daysBetween = (firstDate, secondDate) => {
    const oneDay = 24 * 60 * 60 * 1000
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))
    return diffDays
}

const ActivityLogContainer = styled.div`
  margin-bottom: 30px;
`
const Dots = styled.div`
  max-width: 400px;
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: repeat(auto-fill, 28px);
`

const Title = styled.h3`
  margin-top: 0;
  color: ${p => p.theme.colors.palegreen};
  span {
    color: ${p=>p.theme.colors.lightgreen};
  }
`

let dates = []
for (let i = 0; i <= 19+30; i++) {
    dates.push({ order: i })
}

const ActivityLog = ({sessions}) => {
    let dots = dates.map((date, i) => {
        return (<ActivityDot key={i}/>)
    })

    sessions.forEach((session) => {
        const sessionDate = new Date(session.date)
        const daysDiff = daysBetween(KICK_OFF_DATE, sessionDate)
        dots[daysDiff] = (<ActivityDot key={daysDiff} active={true} date={sessionDate}/>)
    })

    return (
        <ActivityLogContainer>
            <Title>
                Activity log. <span>May 12-Jun 31</span>
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
  background-color: ${p => p.active ? p.theme.colors.coolgreen : p.theme.colors.lightgreen};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  span {
    margin-top: 5px;
  }
`

const ActivityDot = ({active, date}) => {
    return (
        <ActivityDotContainer active={active}>
            <span>{date?date.getUTCDate():null}</span>
        </ActivityDotContainer>
    )
}

export default ActivityLog
