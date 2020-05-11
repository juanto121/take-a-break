import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 150px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`

const Button = styled.button`
  cursor:pointer;
  margin-top: 10px;
  max-width: 200px;
  background-color: ${p=>p.theme.colors.palegreen};
  color: ${p=>p.theme.colors.darkgreen};
  font-size: 1em;
  padding: 10px 30px;
  border:none;
  border-radius: 5px;
  font-weight: 600;
`

const RoutineActions = ({finishSession}) => {
    return (
        <Container>
            <Button onClick={finishSession}>Done!</Button>
        </Container>
    )
}

export default RoutineActions
