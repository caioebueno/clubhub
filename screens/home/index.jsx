import React from 'react'

// COMPONENTS IMPORT
import Logo from '@/components/logo'
import Contact from '@/components/contact'

// STYLED COMPONENTS
import { Title, Container, SubTitle, Item, ItemText, Row, IconContainer } from './styles'

//ICON IMPORT
import CustomIcon from '@/public/icons/custom'
import FanIcon from '@/public/icons/fan'
import UncensoredIcon from '@/public/icons/uncensored'
import MonetizeIcon from '@/public/icons/monetize'

function Home() {
    return (
        <>
            <Container>
                <Logo />
                <div>
                    <Title>
                    THE FUTURE FOR <br />
                    INDEPENDENT CREATORS
                    </Title>
                    <SubTitle>
                    Create your custom fan club and monetize <br />
                    your loyal followers
                    </SubTitle>
                </div>
                <Row>
                    <Item>
                        <IconContainer>
                            <CustomIcon />
                        </IconContainer>
                        <ItemText>
                        Custom Club <br />
                        Curation
                        </ItemText>
                    </Item>
                    <Item>
                        <IconContainer>
                            <UncensoredIcon />
                        </IconContainer>
                        <ItemText blue>
                        100% Uncensored
                        </ItemText>
                    </Item>
                    <Item>
                        <IconContainer>
                            <FanIcon />
                        </IconContainer>
                        <ItemText>
                        Fan Fidelity
                        </ItemText>
                    </Item>
                    <Item>
                        <IconContainer>
                            <MonetizeIcon />
                        </IconContainer>
                        <ItemText blue>
                        Monetize Content
                        </ItemText>
                    </Item>
                </Row>
            </Container>
            <Contact />
        </>
    )
}

export default Home