import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BreakMessage from '../../components/breakMessage/BreakMessage'
import Timer from '../../components/timer/Timer'
import Routine from '../../components/routine/Routine'
import BreakService from '../../services/SessionService'
import StorageService from '../../services/LocalStorage'
import RoutineStep from '../../components/routineStep/RoutineStep'
import ActivityLog from '../../components/activityLog/ActivityLog'
import RoutineActions from '../../components/RoutineActions/RoutineActions'
import Reasons from '../../components/Reasons/Reasons'

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

const Goals = styled.div`
  padding: 0 10px;
  display: flex;
`

const Footer = styled.div`
 height: 200px;
`

const Session = () => {

    const [currentUserEmail, setCurrentUserEmail] = useState('')
    const [currentUsername, setCurrentUsername] = useState('')

    const [currentRoutine, setCurrentRoutine] = useState(null)
    const [currentStep, setCurrentStep] = useState(0)

    const [userSessions, setUserSessions] = useState([])

    const startSession = async (email) => {
        await BreakService.startSession({ email, started: true })
    }

    const retrieveUserSessions = async (email) => {
        const sessions = await BreakService.getUserSessions(email)
        setUserSessions(sessions)
    }

    useEffect(() => {
        const user = StorageService.getCurrentUser()
        setCurrentUsername(user.displayName)
        setCurrentUserEmail(user.email)
        if(user.email) {
            retrieveUserSessions(user.email)
            startSession(user.email)
        }
    }, [])

    useEffect(() => {
        const getRoutine = async () => {
            const routine = await BreakService.getTodayRoutine()
            setCurrentRoutine(routine)
        }
        getRoutine()
    }, [])

    const onFinisSession = async () => {
        await BreakService.completeSession({ email: currentUserEmail, completed: true })
    }

    if (!currentRoutine) {
        return <>Loading....</>
    }

    const steps = currentRoutine.resources.map((step, i) => {
        return <RoutineStep show={currentStep == i} key={i} step={step}></RoutineStep>
    })

    return (
        <SessionContainer>
            <Header>
                <BreakMessage message={`${currentUsername}, take a break.`}/>
                <Timer/>
            </Header>
            <Routine>
                {steps}
            </Routine>
            <RoutineActions finishSession={onFinisSession}></RoutineActions>
            <Goals>
                <ActivityLog sessions={userSessions}/>
                <Reasons></Reasons>
            </Goals>

            <Footer></Footer>
        </SessionContainer>
    )
}

export default Session
