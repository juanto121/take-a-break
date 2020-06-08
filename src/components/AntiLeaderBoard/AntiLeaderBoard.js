import React, { useEffect, useState } from 'react'
import { FaSkullCrossbones } from 'react-icons/fa'
import BreakService from '../../services/SessionService'
import Avatar from './Avatar'
import UserCard from './UserCard'
import remind from '../../services/remind'
import LeaderBoardLoader from '../LeaderBoardLoader/LeaderBoardLoader'
import {
  AntiLeaderBoardContainer,
  FirstAvatarContainer, Instructions,
  ListContainer,
  ListItem,
  Rank,
  SecondAvatarContainer,
  ThirdAvatarContainer,
  Title,
  TopOneScore,
  TopThreeContainer,
  TopThreeName,
  TopTwoAndThreeScore,
} from './AntiLeaderBoard.styled'

const firstAvatarSize = '120px'
const secondAvatarSize = '90px'
const thirdAvatarSize = '90px'

function CardListItem(props) {
  return (
    <ListItem data-count={props.index}>
      <UserCard name={props.name} score={props.score} picture={props.picture}/>
    </ListItem>
  )
}

const getAntiLeaders = async () => {
  const defaultUser = {
    name: 'Invite your friends!',
    picture: 'https://avatars1.githubusercontent.com/u/18264558?s=460&u=0928e6378d148bfaf28b44927fb3b955fc01f648&v=4',
    score: '---',
    id: 'null',
  }
  let antiLeaders
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
  const [usersInfo, setUsersInfo] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const set = async () => {
      const info = await getAntiLeaders()
      setUsersInfo(info)
      setLoading(false)
    }
    setLoading(true)
    set()
  }, [])

  if (loading)
    return (<AntiLeaderBoardContainer>
        <Title>
          Anti<span>-leaderboard</span>
        </Title>
        <LeaderBoardLoader/>
      </AntiLeaderBoardContainer>
    )


  return (
    <AntiLeaderBoardContainer>
      <Title>
        Anti<span>-leaderboard</span>
      </Title>
      <TopThreeContainer>
        <FirstAvatarContainer>
          <Rank>1</Rank>
          <FaSkullCrossbones color='#A6F0D6' size='1.325em'/>
          <Avatar
            bordered
            interactive
            shadowed
            onClick={() => {
              remind(usersInfo[0])
            }}
            size={firstAvatarSize}
            picture={usersInfo[0].picture}
            name={usersInfo[0].name}/>
          <TopThreeName>{usersInfo[0].name}</TopThreeName>
          <TopOneScore>{usersInfo[0].score}</TopOneScore>
        </FirstAvatarContainer>
        <SecondAvatarContainer>
          <Rank>2</Rank>
          <Avatar bordered size={secondAvatarSize} picture={usersInfo[1].picture}/>
          <TopThreeName>{usersInfo[1].name}</TopThreeName>
          <TopTwoAndThreeScore>{usersInfo[1].score}</TopTwoAndThreeScore>
        </SecondAvatarContainer>
        <ThirdAvatarContainer>
          <Rank>3</Rank>
          <Avatar bordered size={thirdAvatarSize} picture={usersInfo[2].picture}/>
          <TopThreeName>{usersInfo[2].name}</TopThreeName>
          <TopTwoAndThreeScore>{usersInfo[2].score}</TopTwoAndThreeScore>
        </ThirdAvatarContainer>
      </TopThreeContainer>
      <ListContainer>
        <CardListItem key="4" index="4" name={usersInfo[3].name} score={usersInfo[3].score}
                      picture={usersInfo[3].picture}/>
        <CardListItem key="5" index="5" name={usersInfo[4].name} score={usersInfo[4].score}
                      picture={usersInfo[4].picture}/>
        <CardListItem key="6" index="6" name={usersInfo[5].name} score={usersInfo[5].score}
                      picture={usersInfo[5].picture}/>
        <CardListItem key="7" index="7" name={usersInfo[6].name} score={usersInfo[6].score}
                      picture={usersInfo[6].picture}/>
      </ListContainer>
      <Instructions>
        The score shows the number of days since the last active break taken.
      </Instructions>
    </AntiLeaderBoardContainer>
  )
}

export default AntiLeaderBoard
