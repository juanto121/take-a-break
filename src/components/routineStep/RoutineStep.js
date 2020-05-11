import React from 'react'
import VideoStep from '../videoStep/VideoStep'

const RoutineStep = ({step}) => {
    let stepComponent = null
    if (step.type === 'youtube') {
        stepComponent = <VideoStep youtubeUrl={step.url} description={step.description}/>
    }

    return (
        <div>
            {stepComponent}
        </div>
    )
}

export default RoutineStep
