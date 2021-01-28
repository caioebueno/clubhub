import React, { useState } from 'react'

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
    const [minimize, setMinimize] = useState(false)

    return (
        <>
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
                    Create your custom {minimize && <br />} fan club and monetize <br />
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
                            } : {}}
                        >
                        Custom Club <br />
                        Curation
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
                            <UncensoredIcon
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
                        100% Uncensored
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
                        Fan Fidelity
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
                        Monetize Content
                        </ItemText>
                    </Item>
                </Row>
            </Container>
            <Contact setMinimize={setMinimize} minimize={minimize} />
        </>
    )
}

export default Home