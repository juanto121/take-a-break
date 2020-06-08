import styled from 'styled-components'

export const AntiLeaderBoardContainer = styled.div`
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-color: ${p => p.theme.colors.lightgreen};
  border-width: 2px;
  align-items: center;
`

export const Title = styled.h3`
  margin-top: 0;
  color: ${p => p.theme.colors.palegreen};
  font-size: 24px;
  text-align: center;
  span {
    color: ${p => p.theme.colors.palegreen};
    font-weight: 200;
  }
`
export const TopThreeContainer = styled.div`
  border-color: green;
  border-width: 2px;
  display: flex;
  justify-content: center;
  position: relative;
`

export const AvatarContainer = styled.div`
  text-align: center;
`

export const FirstAvatarContainer = styled(AvatarContainer)`
  z-index: 2;
`

export const SecondAvatarContainer = styled(AvatarContainer)`
  position: absolute;
  bottom: -15px;
  left: -80px;
`

export const ThirdAvatarContainer = styled(AvatarContainer)`
  position: absolute;
  bottom: -15px;
  left: 110px;
  z-index: 1;
`

export const TopThreeName = styled.p`
  margin: 5px;
  font-size: 12px;
  color: white;
  text-align: center;
  text-transform:capitalize;
`

export const TopOneScore = styled.p`
  margin: 0;
  font-size: 25px;
  text-align: center;
  color: ${props => props.theme.colors.palegreen};
`

export const TopTwoAndThreeScore = styled.p`
  margin: 0;
  font-size: 20px;
  text-align: center;
  color: ${props => props.theme.colors.palegreen};
`

export const Rank = styled(TopThreeName)`
  font-size: 14px;
`
export const ListContainer = styled.ol`
  list-style: none;
  padding: 0;
`

export const ListItem = styled.li`
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

export const Instructions = styled.p`
  margin: 0;
  max-width: 250px;
  font-size: 0.7em;
  color: ${p=>p.theme.colors.lightgreen}
`
