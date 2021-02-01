import React from 'react'

// COMPONENTS IMPORT
import Logo from '@/components/logo'
import Contact from '@/components/contactMobile'

// ICONS IMPORT
import CustomIcon from '@/public/icons/custom'
import UncensoredIcon from '@/public/icons/uncensored.png'
import FanIcon from '@/public/icons/fan'
import MonetizeIcon from '@/public/icons/monetize'
 
// STYLED COMPONENTS
import { Title, SubTitle, StyledText, Row, Text, Container } from './styles'

function Home() {
    return (
        <Container>
            <Logo />
            <Title>
                THE FUTURE FOR <br />
                INDEPENDENT <br /> 
                CREATORS
            </Title>
            <SubTitle>
                Create your custom 
                <StyledText>fan club</StyledText> and monetize 
                your loyal followers
            </SubTitle>
            <Row>
                <div style={{marginLeft: 15, marginBottom: 10}}>

                <CustomIcon />

                </div>
                <Text>
                    CUSTOM CLUB CURATION
                </Text>
            </Row>
            <Row>
                
                <img src={UncensoredIcon}  style={{marginBottom: 25}} />
                <Text style={{
                    marginLeft: 0
                }}>
                    <span style={{color: '#0378B9'}}>100% UNCENSORED</span>
                </Text>
            </Row>
            <Row>
                <div style={{marginBottom: 10}}>
                    <FanIcon />
                </div>
                <Text>
                    FAN FIDELITY
                </Text>
            </Row>
            <Row>
                <div style={{marginLeft: 30, marginBottom: 25}}>
                    <MonetizeIcon  />
                </div>
                <Text>
                    <span style={{color: '#0378B9'}}>MONETIZE CONTENT</span>
                </Text>
            </Row>
            <Contact />
        </Container>
    )
}

export default Home