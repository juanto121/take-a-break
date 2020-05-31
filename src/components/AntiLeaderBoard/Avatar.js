import React from 'react'
import styled from 'styled-components'

const AvatarContainer = styled.div`
    border-radius: 50%;
    height: ${props => props.size};
    width: ${props => props.size};
    border-style: ${props => props.bordered ? 'solid' : 'none'};
    border-color: ${props => props.bordered ? props.theme.colors.palegreen : 'transparent'};
    box-shadow: ${props => props.shadowed ? '0px 0px 5px 2px' + props.theme.colors.palegreen : 'none'};
    padding: 0px;
    margin: 0px;
`
const FormatedImage = styled.img`
    height: ${props => props.size};
    width: ${props => props.size};
    border-radius: 50%;
`

function Avatar(props) {
    return (
        <AvatarContainer bordered={props.bordered} size={props.size} shadowed={props.shadowed}>
            <FormatedImage src={props.photoSrc} size={props.size}/>
        </AvatarContainer>
    )
}




export default Avatar;