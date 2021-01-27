import React from 'react'

// STYLED COMPONENTS
import { Container, LightText, DarkText, DarkTextContainer } from './styles'

function Logo(props) {
    return (
        <Container>
            <LightText>club</LightText>
            <DarkTextContainer>
                <DarkText>hub</DarkText>
            </DarkTextContainer>
        </Container>
    )
}

export default Logo