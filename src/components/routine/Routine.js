import React from 'react'
import styled from 'styled-components'

const RoutineContainer = styled.div`
  margin-left: -2px;
  padding: 30px 0;
  width: 100%;
  border-radius: 10px;
`

const Routine = ({children}) => {
    return (
        <RoutineContainer>
            {children}
        </RoutineContainer>
    )
}

export default Routine
