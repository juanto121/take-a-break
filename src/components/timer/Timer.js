import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import useInterval from '../../shared/UseInterval'
import { FiClock } from 'react-icons/fi'

const TimerContainer = styled.div`
  justify-self: flex-end;
`
const Clock = styled.h2`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.palegreen};
  width: 200px;
`

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 10px;
`

const ONE_MINUTE = 60
const MAX_TIME = ONE_MINUTE * 15

const Timer = ({ timeStart = new Date().getTime() }) => {

    const [timeLeft, setTimeLeft] = useState(MAX_TIME)


    useInterval(() => {
        const now = new Date().getTime()
        setTimeLeft(timeLeft - (now - timeStart) / 1000)
    }, 1000)

    return (
        <TimerContainer>
            <Clock>
                <IconContainer>
                    <FiClock/>
                </IconContainer>
                <div style={{textAlign: 'end'}}>
                    {parseInt(timeLeft / 60)} : {parseInt(timeLeft % 60)} left
                </div>
            </Clock>
        </TimerContainer>
    )
}

export default Timer
