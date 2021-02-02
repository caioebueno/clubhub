import React, { useState } from 'react'
import { Breakpoint } from 'react-socks'

// COMPONENTS IMPORT
import Logo from '@/components/logo'
import Contact from '@/components/contact'

// STYLED COMPONENTS
import { Title, Container, SubTitle, Item, ItemText, Row, IconContainer , StyledText} from './styles'

// MOBILE 
import Mobile from './mobile'

//ICON IMPORT
import CustomIcon from '@/public/icons/custom'
import FanIcon from '@/public/icons/fan'
import MonetizeIcon from '@/public/icons/monetize'
import UncensoredIcon from '@/public/icons/uncensored.png'

function Home() {
    const [minimize, setMinimize] = useState(false)

    return (
        <>
            <Breakpoint customQuery='(min-width: 1200px)' style={{
                height: '100%'
            }}>
                <Container>
                    
                    <Logo />
                    <div>
                        <Title
                            style={minimize ? {
                                fontSize: 22,
                                marginBottom: 40
                            } : {}}
                        >
                            THE FUTURE FOR <br />
                    INDEPENDENT {minimize && <br />} CREATORS
                        </Title>
                        <SubTitle
                            style={minimize ? {
                                fontSize: 16
                            } : {}}
                        >
                            Create your custom {minimize && <br />} <StyledText>fan club</StyledText> and monetize <br />
                    your loyal followers
                        </SubTitle>
                    </div>
                    <Row
                        style={minimize ? {
                            flexDirection: 'column',
                            height: '45vh'
                        } : {}}
                    >
                        <Item
                            style={minimize ? {
                                flexDirection: 'row'
                            } : {}}
                        >
                            <IconContainer
                                style={minimize ? {
                                    height: 50
                                } : {}}
                            >
                                <CustomIcon
                                    small={minimize ? true : false}
                                />
                            </IconContainer>
                            <ItemText
                                style={minimize ? {
                                    fontSize: 16,
                                    marginLeft: 10,
                                    textAlign: 'left'
                                } : {}}
                            >
                                CUSTOM CLUB <br />
                        CURATION
                            </ItemText>
                        </Item>
                        <Item
                            style={minimize ? {
                                flexDirection: 'row'
                            } : {}}
                        >
                            <IconContainer
                                style={minimize ? {
                                    height: 50,
                                } : {}}
                            >
                                <img src={UncensoredIcon} style={minimize ? {
                                    width: 80,
                                    transform: 'rotate(-30deg)'
                                } : {marginTop: 30}}/>
                            </IconContainer>
                            <ItemText
                                style={minimize ? {
                                    fontSize: 16,
                                    marginLeft: -20,
                                } : {}}
                                blue
                            >
                                100% UNCENSORED
                            </ItemText>
                        </Item>
                        <Item
                            style={minimize ? {
                                flexDirection: 'row'
                            } : {}}
                        >
                            <IconContainer
                                style={minimize ? {
                                    height: 50
                                } : {}}
                            >
                                <FanIcon
                                    small={minimize ? true : false}
                                />
                            </IconContainer>
                            <ItemText
                                style={minimize ? {
                                    fontSize: 16,
                                    marginLeft: 10,
                                } : {}}
                            >
                                FAN FIDELITY
                            </ItemText>
                        </Item>
                        <Item
                            style={minimize ? {
                                flexDirection: 'row'
                            } : {}}
                        >
                            <IconContainer
                                style={minimize ? {
                                    height: 50
                                } : {}}
                            >
                                <MonetizeIcon
                                    small={minimize ? true : false}
                                />
                            </IconContainer>
                            <ItemText
                                style={minimize ? {
                                    fontSize: 16,
                                    marginLeft: 10,
                                } : {}}
                                blue
                            >
                                MONETIZE CONTENT
                            </ItemText>
                        </Item>
                    </Row>
                   
                </Container>
                <Contact setMinimize={setMinimize} minimize={minimize} />
            </Breakpoint>
            <Breakpoint customQuery='(max-width: 1200px)'>
                <Mobile />
            </Breakpoint>
        </>
    )
}

export default Home