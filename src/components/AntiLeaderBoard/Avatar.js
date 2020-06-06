import React from 'react'
import styled from 'styled-components'

const AvatarContainer = styled.div`
    border-radius: 50%;
    height: ${props => props.size};
    width: ${props => props.size};
    border-style: ${props => props.bordered ? 'solid' : 'none'};
    border-color: ${props => props.bordered ? props.theme.colors.palegreen : 'transparent'};
    box-shadow: ${props => props.shadowed ? '0px 0px 5px 4px' + props.theme.colors.palegreen : 'none'};
    padding: 0px;
    margin: 0px;
`
const FormatedImage = styled.img`
    object-fit: cover;
    height: ${props => props.size};
    width: ${props => props.size};
    border-radius: 50%;
    padding: 0px;
    margin: 0px;
`

const AvatarCover = styled(AvatarContainer)`
    background-color: rgba(0,0,0,0.0);
    ${AvatarContainer}:hover & {
        background-color: rgba(0,0,0,0.3);
    }
    display: flex;
    align-items: center;
    position: absolute;
    top: 24%;
`

const AvatarCoverText = styled.p`
 maring: 0px;
 padding: 0px;
 color: rgba(255, 255, 255, 0.0);
 font-size: 14px;
 font-weight: 400;
 ${AvatarContainer}:hover & {
    color: rgba(255, 255, 255, 1.0)
 }
`
function capitalizeName(name) {
    return name.replace(/\b(\w)/g, s => s.toUpperCase());
  }

function Avatar(props) {

    const name = props.name ? capitalizeName(props.name) : 'this sloth'

    if (props.interactive) {
        return (
            <AvatarContainer bordered={props.bordered} size={props.size} shadowed={props.shadowed}>
                <FormatedImage src={props.picture} size={props.size} />
                <AvatarCover size={props.size} onClick={props.onClick}>
                    <AvatarCoverText>
                        Remind {name} to take a break
                    </AvatarCoverText>
                </AvatarCover>
            </AvatarContainer>
        )
    } else {
        return (
            <AvatarContainer bordered={props.bordered} size={props.size} shadowed={props.shadowed}>
                <FormatedImage src={props.picture} size={props.size} />
            </AvatarContainer>
        )
    }
}

export default Avatar;
