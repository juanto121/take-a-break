import React from 'react'
import styled from 'styled-components'

const VideoStepContainer = styled.div`
  
`

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
`

const DescriptionContainer = styled.div`
  
`

const VideoStep = ({ youtubeUrl, description }) => {
    return (
        <VideoStepContainer>
            <VideoContainer>
                <iframe width="560" height="315" src={youtubeUrl} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </VideoContainer>
            <DescriptionContainer>
                {description}
            </DescriptionContainer>
        </VideoStepContainer>
    )
}

export default VideoStep
