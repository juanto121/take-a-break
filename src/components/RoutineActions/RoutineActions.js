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

const emojiList = ['🎉', '🙌', '🎆', '🔥', '🏃']

const RoutineActions = ({ finishSession, sessionCompleted, loading }) => {
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
            </Button>
        </Container>
    )
}

export default RoutineActions
