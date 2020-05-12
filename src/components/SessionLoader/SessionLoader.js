import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

const SessionLoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  flex-direction: column;
`

const Title = styled.p`
color: ${p=>p.theme.colors.palegreen}
`

const SessionLoader = () => {
    return (
        <SessionLoaderContainer>
            <Loader
                type="Rings"
                color="#A6F0D6"
                height={100}
                width={100}
            />
            <Title>Breathe while we load today's session...</Title>
        </SessionLoaderContainer>
    )
}

export default SessionLoader
