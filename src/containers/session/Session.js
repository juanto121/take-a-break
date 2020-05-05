import React from 'react'
import styled from 'styled-components'
import BreakMessage from '../../components/breakMessage/BreakMessage'
import Timer from '../../components/timer/Timer'
import Routine from '../../components/routine/Routine'

const SessionContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  max-width: 1024px;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
`

const Session = () => {
    return (
        <SessionContainer>
            <Header>
                <BreakMessage message="Felipe, take a break."/>
                <Timer/>
            </Header>
            <Routine>
            </Routine>
        </SessionContainer>
    )
}

export default Session
