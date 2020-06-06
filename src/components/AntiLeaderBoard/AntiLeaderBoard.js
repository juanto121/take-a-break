import React from 'react'
import styled from 'styled-components'
import { FaSkullCrossbones } from 'react-icons/fa'

import Avatar from './Avatar'
import UserCard from './UserCard'

const firstAvatarSize = '120px'
const secondAvatarSize = '90px'
const thirdAvatarSize = '90px'


const AntiLeaderBoardContainer = styled.div`
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-color: ${p => p.theme.colors.lightgreen};
  border-width: 2px;
`

const Title = styled.h3`
  margin-top: 0;
  color: ${p => p.theme.colors.palegreen};
  font-size: 24px;
  text-align: center;
  span {
    color: ${p => p.theme.colors.palegreen};
    font-weight: 200;
  }
`
const TopThreeContainer = styled.div`
  border-color: green;
  border-width: 2px;
  display: flex;
  justify-content: center;
  position: relative;
`

const ListContainer = styled.ol`
  color: white;
  border-color: ${p => p.theme.colors.palegreen};
  border-width: 2px;
`

const AvatarContainer = styled.div`
  text-align: center;
`

const FirstAvatarContainer = styled(AvatarContainer)`
  z-index: 2;
`

const SecondAvatarContainer = styled(AvatarContainer)`
  position: absolute;
  bottom: -10px;
  left: 25px;
`

const ThirdAvatarContainer = styled(AvatarContainer)`
  position: absolute;
  bottom: -10px;
  right: 25px;
  z-index: 1;
`

const TopThreeName = styled.p`
  margin: 5px;
  font-size: 16px;
  color: white;
  text-align: center;
`

const TopThreeScore = styled.p`
  margin: 0;
  font-size: 25px;
  text-align: center;
  color: ${props => props.theme.colors.palegreen};
`

const Rank = styled(TopThreeName)`
  font-size: 14px;
`

const ListItem = styled.li``

function CardListItem(props) {
    return (
        <ListItem>
            <UserCard name={props.name} score={props.score} photoSrc={props.photoSrc}/>
        </ListItem>
    )
}

function AntiLeaderBoard() {

    const user = {
        'name': 'Martha Kent',
        'score': -20,
        'rank': 4,
        'photoURL': 'https://avatars1.githubusercontent.com/u/18264558?s=460&u=0928e6378d148bfaf28b44927fb3b955fc01f648&v=4',
    }
    return (
        <AntiLeaderBoardContainer>
            <Title>
                Anti<span>-leaderboard</span>
            </Title>
            <TopThreeContainer>
                <FirstAvatarContainer>
                    <Rank>1</Rank>
                    <FaSkullCrossbones color='#A6F0D6' size='1.75em' margin={'10px 0'}/>
                    <Avatar bordered shadowed size={firstAvatarSize} photoSrc={user.photoURL}/>
                    <TopThreeName>Martha</TopThreeName>
                    <TopThreeScore>-30</TopThreeScore>
                </FirstAvatarContainer>
                <SecondAvatarContainer>
                    <Rank>2</Rank>
                    <Avatar bordered size={secondAvatarSize} photoSrc={user.photoURL}/>
                    <TopThreeName>Martha</TopThreeName>
                    <TopThreeScore>-30</TopThreeScore>
                </SecondAvatarContainer>
                <ThirdAvatarContainer>
                    <Rank>3</Rank>
                    <Avatar bordered size={thirdAvatarSize} photoSrc={user.photoURL}/>
                    <TopThreeName>Martha</TopThreeName>
                    <TopThreeScore>-30</TopThreeScore>
                </ThirdAvatarContainer>
            </TopThreeContainer>
            <ListContainer start="4">
                <CardListItem key="4" name={user.name} score={user.score} photoSrc={user.photoURL}/>
                <CardListItem key="5" name={user.name} score={user.score} photoSrc={user.photoURL}/>
                <CardListItem key="6" name={user.name} score={user.score} photoSrc={user.photoURL}/>
            </ListContainer>
        </AntiLeaderBoardContainer>
    )
}

export default AntiLeaderBoard
