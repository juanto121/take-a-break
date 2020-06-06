import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'


const HEIGHT = '45px';

const CardContainer = styled.div`
  box-sizing: border-box;
  width: 230px;
  height: ${HEIGHT};
  display: flex;
  border-radius: 25px 25px;
  background-color: ${props => props.theme.colors.lightgreen};
  margin: 10px 0px;
`

const Name = styled.p`
  font-size: 12px;
  color: white;
  text-align: left;
  margin-left: 5px;
  flex: 1 1 136px;
  margin-bottom: 0px;
  margin-top: 16px;
  text-transform:capitalize;
`

const Score = styled.p`
  flex: 1 1 20px;
  margin: 0;
  font-size: 16px;
  text-align: center;
  height: ${HEIGHT};
  color: ${props => props.theme.colors.palegreen};
  display: flex;
  align-items: center;
`

function UserCard(props) {
    return (
        <CardContainer>
            <Avatar size={HEIGHT} picture={props.picture}/>
            <Name>{props.name}</Name>
            <Score><span>{props.score}</span></Score>
        </CardContainer>
    )
}




export default UserCard;
