import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'


const HEIGHT = '50px';

const CardContainer = styled.div`
  box-sizing: border-box;
  width: 270px;
  height: ${HEIGHT};
  display: flex;
  border-radius: 25px 25px;
  background-color: ${props => props.theme.colors.lightgreen};
  margin: 10px 0px;
`

const Name = styled.p`
  font-size: 16px;
  color: white;
  text-align: left;
  margin-left: 5px;
  flex: 1 1 136px;
`

const Score = styled.p`
  flex: 1 1 20px;
  margin: 0;
  font-size: 22px;
  text-align: center;
  height: 50px;
  color: ${props => props.theme.colors.palegreen};
  display: flex;
  align-items: center;
`

function UserCard(props) {
    return (
        <CardContainer>
            <Avatar size="50px" photoSrc={props.photoSrc}/>
            <Name>{props.name}</Name>
            <Score><span>{props.score}</span></Score>
        </CardContainer>
    )
}




export default UserCard;