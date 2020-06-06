import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaSkullCrossbones } from 'react-icons/fa'
import BreakService from '../../services/SessionService'
import Avatar from './Avatar'
import UserCard from './UserCard'
import remind from '../../services/remind'

const initialAntileaders = [
  {
    name: "Carla Saenz",
    picture: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    score: -10,
    id: 1
  },
  {
    name: "Daniela Xavier",
    picture: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    score: -9,
    id: 2
  },
  {
    name: "Jim Lopez",
    picture: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    score: -4,
    id: 3
  },
  {
    name: "Carlos Sagan",
    picture: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    score: -4,
    id: 3
  },
  {
    name: "Carlos Sagan",
    picture: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    score: -4,
    id: 3
  },
  {
    name: "Carlos Sagan",
    picture: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    score: -4,
    id: 3
  },
  {
    name: "Carlos Sagan",
    picture: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    score: -4,
    id: 3
  },
]


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
  align-items: center;
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

const AvatarContainer = styled.div`
  text-align: center;
`

const FirstAvatarContainer = styled(AvatarContainer)`
  z-index: 2;
`

const SecondAvatarContainer = styled(AvatarContainer)`
  position: absolute;
  bottom: -15px;
  left: -80px;
`

const ThirdAvatarContainer = styled(AvatarContainer)`
  position: absolute;
  bottom: -15px;
  left: 110px;
  z-index: 1;
`

const TopThreeName = styled.p`
  margin: 5px;
  font-size: 12px;
  color: white;
  text-align: center;
  text-transform:capitalize;
`

const TopOneScore = styled.p`
  margin: 0;
  font-size: 25px;
  text-align: center;
  color: ${props => props.theme.colors.palegreen};
`

const TopTwoAndThreeScore = styled.p`
  margin: 0;
  font-size: 20px;
  text-align: center;
  color: ${props => props.theme.colors.palegreen};
`

const Rank = styled(TopThreeName)`
  font-size: 14px;
`
const ListContainer = styled.ol`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  position: relative;
  &:before {
    content:attr(data-count)'.';
    font-size: 14px;
    color: white;
    line-height: 1;
    position: absolute;
    left: -18px;
    top: 14px;
  }
`

function CardListItem(props) {
  return (
    <ListItem data-count={props.index}>
      <UserCard name={props.name} score={props.score} picture={props.picture} />
    </ListItem>
  )
}

const getAntiLeaders = async () => {
  const defaultUser = {
    name: "Invite your friends!",
    picture: "https://avatars1.githubusercontent.com/u/18264558?s=460&u=0928e6378d148bfaf28b44927fb3b955fc01f648&v=4",
    score: "---",
    id: "null"
  }
  let antiLeaders;
  const antileaderboard = await BreakService.getAntiLeaderboard()
  antiLeaders = antileaderboard.antiLeaders
  if (!antiLeaders) {
    antiLeaders = []
  }
  while (antiLeaders.length < 7) {
    antiLeaders.push(defaultUser)
  }
  return antiLeaders
}

function AntiLeaderBoard() {
  const [usersInfo, setUsersInfo] = useState(initialAntileaders)
  useEffect(() => {
      const set = async () => {
        const info = await getAntiLeaders()
        setUsersInfo(info)
      }
    set()
  }, []);
  return (
    <AntiLeaderBoardContainer>
      <Title>
        Anti<span>-leaderboard</span>
      </Title>
      <TopThreeContainer>
        <FirstAvatarContainer>
          <Rank>1</Rank>
          <FaSkullCrossbones color='#A6F0D6' size='1.325em' />
          <Avatar
            bordered
            interactive
            shadowed
            onClick={() => {remind(usersInfo[0]) }}
            size={firstAvatarSize}
            picture={usersInfo[0].picture}
            name={usersInfo[0].name}/>
          <TopThreeName>{usersInfo[0].name}</TopThreeName>
          <TopOneScore>{usersInfo[0].score}</TopOneScore>
        </FirstAvatarContainer>
        <SecondAvatarContainer>
          <Rank>2</Rank>
          <Avatar bordered size={secondAvatarSize} picture={usersInfo[1].picture} />
          <TopThreeName>{usersInfo[1].name}</TopThreeName>
          <TopTwoAndThreeScore>{usersInfo[1].score}</TopTwoAndThreeScore>
        </SecondAvatarContainer>
        <ThirdAvatarContainer>
          <Rank>3</Rank>
          <Avatar bordered size={thirdAvatarSize} picture={usersInfo[2].picture} />
          <TopThreeName>{usersInfo[2].name}</TopThreeName>
          <TopTwoAndThreeScore>{usersInfo[2].score}</TopTwoAndThreeScore>
        </ThirdAvatarContainer>
      </TopThreeContainer>
      <ListContainer>
        <CardListItem key="4" index="4" name={usersInfo[3].name} score={usersInfo[3].score} picture={usersInfo[3].picture} />
        <CardListItem key="5" index="5" name={usersInfo[4].name} score={usersInfo[4].score} picture={usersInfo[4].picture} />
        <CardListItem key="6" index="6" name={usersInfo[5].name} score={usersInfo[5].score} picture={usersInfo[5].picture} />
        <CardListItem key="7" index="7" name={usersInfo[6].name} score={usersInfo[6].score} picture={usersInfo[6].picture} />
      </ListContainer>
    </AntiLeaderBoardContainer>
  )
}

export default AntiLeaderBoard
