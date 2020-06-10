import React, { useState } from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

const Container = styled.div`
  height: 150px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`

const Button = styled.button`
  position: relative;
  cursor: ${p => p.disabledButton ? 'auto' : 'pointer'};
  margin-top: 10px;
  max-width: 300px;
  background-color: ${p => p.disabledButton ? 'white' : p.theme.colors.palegreen};
  color: ${p => p.theme.colors.darkgreen};
  font-size: 1em;
  padding: 10px 30px;
  border:none;
  border-radius: 5px;
  font-weight: 600;
  display: flex;
  align-content: center;
  &:focus {
    outline: none;
  }
`

const LeaderFigurine = styled.div`
  display: ${p=>p.show?"block":"none"};
  position: absolute;
  font-size: 2em;
  top: -20px;
  left: -10px;
  transform: rotate(-28deg);
`

const CROWN = '👑'
const emojiList = ['🎉', '🙌', '🎆', '🔥', '🏃']

const RoutineActions = ({ finishSession, sessionCompleted, loading, isLeader }) => {
    const [emojiIndex, setEmojiIndex] = useState(parseInt(Math.random() * 5))

    return (
        <Container>
            <Button disabledButton={sessionCompleted}
                    onClick={() => {
                        if (!sessionCompleted)
                            finishSession()
                        setEmojiIndex(parseInt(Math.random() * 5))
                    }}>
                <div style={{display:"inline-block"}}>
                {
                        sessionCompleted ? 'You are Done! ' + emojiList[emojiIndex] : ('Done!')
                }
                </div>
                {
                    loading ? <div style={{marginLeft: "5px", display: "flex"}}><Loader
                        type="Oval"
                        color="#25475E"
                        height={20}
                        width={20}
                    /></div>:null
                }
                <LeaderFigurine title={"Congrats on keeping your healthy habits strong!. You are in the top 10! (of real leaders)"} show={isLeader}><span>{CROWN}</span></LeaderFigurine>
            </Button>
        </Container>
    )
}

export default RoutineActions
