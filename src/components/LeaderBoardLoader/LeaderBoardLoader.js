import React from 'react'
import styled from 'styled-components'
import './PlaceholderShimmer.css'

const LoaderContainer = styled.div`
  width: 100%;
  min-height: 300px;
  max-width: 324px;
  border-radius: 16px;
  background-color: ${p => p.theme.colors.midBlue};
  
  &.gradient {
      animation-duration: 1.8s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: placeHolderShimmer;
      animation-timing-function: linear;
      background: ${(p) => p.theme.colors.darkgreen};
      background: linear-gradient( to right, #345974 8%, #3b617c 38%, #345974 58% );
      background-size: 1000px 640px;
      position: relative;
  }
`

const LeaderBoardLoader = () => {
  return (
    <LoaderContainer color={'blue'} className={'gradient'}>
    </LoaderContainer>
  )
}

export default LeaderBoardLoader
