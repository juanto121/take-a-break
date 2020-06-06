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
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import SessionLoader from '../../components/SessionLoader/SessionLoader'
import AntiLeaderBoard from '../../components/AntiLeaderBoard/AntiLeaderBoard'


const SessionContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  padding: 0 10px;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
`

const Goals = styled.div`
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const LeftColumn = styled.div`
  flex: 1;
  max-width: 330px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
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

  const [sessionCompleted, setSessionCompleted] = useState(false)

  const [completingSession, setCompletingSession] = useState(false)

  const startSession = async (email) => {
    await BreakService.startSession({ email, started: true })
  }

  const retrieveUserSessions = async (email) => {
    setCompletingSession(true)
    const sessions = await BreakService.getUserSessions(email)
    if (sessions && sessions.length > 0) {
      const sortedSessions = sessions.sort((a, b) => {
        const aDate = new Date(a.date)
        const bDate = new Date(b.date)
        return aDate.getTime() - bDate.getTime()
      })

      const lastSession = sortedSessions[sortedSessions.length - 1]
      const lastSessionDate = new Date(lastSession.date)
      const lastSessionDay = lastSessionDate.getUTCDate()
      const todayDay = new Date().getUTCDate()
      //TODO: Check dates at midnight
      if (lastSessionDay === todayDay) {
        setSessionCompleted(true)
      }
    }
    setUserSessions(sessions)
    setCompletingSession(false)
  }

  useEffect(() => {
    const user = StorageService.getCurrentUser()
    setCurrentUsername(user.displayName)
    setCurrentUserEmail(user.email)
    if (user.email) {
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

  const onFinishSession = async () => {
    setCompletingSession(true)
    await BreakService.completeSession({ email: currentUserEmail, completed: true })
    setSessionCompleted(true)
    setCompletingSession(false)
    retrieveUserSessions(currentUserEmail)
  }

  if (!currentRoutine) {
    return <SessionLoader/>
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
      <RoutineActions loading={completingSession} finishSession={onFinishSession}
                      sessionCompleted={sessionCompleted}></RoutineActions>
      <Goals>
        <LeftColumn>
          <ActivityLog sessions={userSessions}/>
          <Reasons/>
        </LeftColumn>
        <AntiLeaderBoard/>
      </Goals>
      <Footer></Footer>
    </SessionContainer>
  )
}

export default Session
