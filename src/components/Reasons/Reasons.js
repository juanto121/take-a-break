import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex-grow: 1;
  border: 2px dashed ${p => p.theme.colors.lightgreen};
  border-radius: 5px;
  margin-left: 30px;
  padding: 20px;
`

const Title = styled.h3`
text-align: center;
margin-top: 0;
color: ${p => p.theme.colors.palegreen}
`

const Arguments = styled.p`
  color: ${p => p.theme.colors.lightgreen};
  max-width: 400px;
  font-weight: 400;
`

const Reasons = () => {
    return (
        <Container>
            <Title>Why am I doing this?</Title>
            <Arguments>
                This should contain sound arguments that guide the user of why is important to take a
                break. And also sources so it that users can read up and convince themselves of the usefulness.
            </Arguments>
            <Arguments>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur, consequatur dignissimos dolor, ex facilis ipsa laboriosam mollitia natus, nesciunt numquam perferendis quas totam vitae. Assumenda ratione repellendus sunt?
            </Arguments>
        </Container>
    )
}

export default Reasons
