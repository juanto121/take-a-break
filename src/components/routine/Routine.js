import React from 'react'
import styled from 'styled-components'

const RoutineContainer = styled.div`
  margin-left: -2px;
  padding: 30px 0;
  width: 100%;
  border: 2px dashed ${p=>p.theme.colors.palegreen};
  border-radius: 10px;

`

const Routine = () => {
    return (
        <RoutineContainer>

        </RoutineContainer>
    )
}

export default Routine
