import React from 'react'
import styled from 'styled-components'
import { FaSkullCrossbones } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import Avatar from './Avatar'
import UserCard from './UserCard'

const firstAvatarSize = "120px";
const secondAvatarSize = "90px";
const thirdAvatarSize = "90px";


const AntiLeaderBoardContainer = styled.div`
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-style: dashed;
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
  height: 50%;
  border-style: dashed;
  border-color: green;
  border-width: 2px;
`

const ListContainer = styled.ol`
  height: 50%;
  start: 4;
  color: white;
  border-style: dashed;
  border-color: ${p => p.theme.colors.palegreen};
  border-width: 2px;
`

const AvatarContainer = styled.div`
  height: 140px;
  width: 120px;
  margin: 0px;
  padding: 0px;
  position: relative;
  border-style: dashed;
  border-color: ${p => p.theme.colors.lightgreen};
  border-width: 1px;
`

const FirstAvatarContainer = styled(AvatarContainer)`
  height: 150px;
  top: 10px;
  left: 110px;
`
const SecondAvatarContainer = styled(AvatarContainer)`
  top: -70px;
  left: 5px;
`

const ThirdAvatarContainer = styled(AvatarContainer)`
  top: -212px;
  left: 215px;
`

const TopThreeName = styled.p`
    font-size: 16px;
    color: white;
    text-align: center;
`

const TopThreeScore = styled.p`
    font-size: 22px;
    text-align: center;
    margin-right: 5px;
    margin-top: 12px;
    color: ${props => props.theme.colors.palegreen};
`

const Rank = styled(TopThreeName)`
  font-size: 14px;
`

function SkullIcon() {
  const props = {
    color: "#A6F0D6",
    size: "1.75em",
  }
  return (
    <IconContext.Provider value={props}>
      <div>
        <FaSkullCrossbones />
      </div>
    </IconContext.Provider>
  )
}


function CardListItem(props) {
  return (
    <li>
      <UserCard name={props.name} score={props.score} photoSrc={props.photoSrc} />
    </li>
  )
}


function AntiLeaderBoard() {
  const user = {
    "name": "Martha Kent",
    "score": -20,
    "rank": 4,
    "photoURL": "https://avatars1.githubusercontent.com/u/18264558?s=460&u=0928e6378d148bfaf28b44927fb3b955fc01f648&v=4"
  };
  return (
    <AntiLeaderBoardContainer>
      <Title>
        Anti<span>-leaderboard</span>
      </Title>
      <TopThreeContainer>
        <FirstAvatarContainer>
          <Rank>1</Rank>
          <SkullIcon />
          <Avatar bordered shadowed size={firstAvatarSize} photoSrc={user.photoURL} />
          <TopThreeName>Martha</TopThreeName>
          <TopThreeScore>-30</TopThreeScore>
        </FirstAvatarContainer>
        <SecondAvatarContainer>
          <Rank>2</Rank>
          <Avatar bordered size={secondAvatarSize} photoSrc={user.photoURL} />
          <TopThreeName>Martha</TopThreeName>
          <TopThreeScore>-30</TopThreeScore>
        </SecondAvatarContainer>
        <ThirdAvatarContainer>
          <Rank>3</Rank>
          <Avatar bordered size={thirdAvatarSize} photoSrc={user.photoURL} />
          <TopThreeName>Martha</TopThreeName>
          <TopThreeScore>-30</TopThreeScore>
        </ThirdAvatarContainer>
      </TopThreeContainer>
      <ListContainer>
        <CardListItem key="4" name={user.name} score={user.score} photoSrc={user.photoURL} />
        <CardListItem key="5" name={user.name} score={user.score} photoSrc={user.photoURL} />
        <CardListItem key="6" name={user.name} score={user.score} photoSrc={user.photoURL} />
      </ListContainer>
    </AntiLeaderBoardContainer>
  )
}

export default AntiLeaderBoard;