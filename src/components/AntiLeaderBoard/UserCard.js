import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'


const HEIGHT = '50px';

const CardContainer = styled.div`
    box-sizing: border-box;
    width: 270px;
    height: ${HEIGHT};
    display: flex;
    border-top-right-radius: 25px 25px;
    border-bottom-right-radius: 25px 25px;
    border-top-left-radius: 25px 25px;
    border-bottom-left-radius: 25px 25px;
    background-color: ${props => props.theme.colors.lightgreen};
    margin: 10px 0px;
`

const Name = styled.p`
    font-size: 16px;
    color: white;
    text-align: left;
    margin-left: 10px;
    margin-right: 55px 
`

const Score = styled.p`
    font-size: 22px;
    text-align: center;
    margin-right: 5px;
    margin-top: 12px;
    color: ${props => props.theme.colors.palegreen};
`

function UserCard(props) {
    return (
        <CardContainer>
            <Avatar size="45px" photoSrc={props.photoSrc}/>
            <Name>{props.name}</Name>
            <Score>{props.score}</Score>
        </CardContainer>
    )
}




export default UserCard;