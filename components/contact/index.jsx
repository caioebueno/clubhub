import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'


// STYLED COMPONENTS
import {
    Container, Text, Animation, Title,
    SubTitle, Form, Row, Button, Center,
    ButtonAnimation, ButtonContainer, Label,
    ContactInfoContainer
} from './styles'

// COMPONENTS IMPORT
import Input from '@/components/input'

// ICON IMPORT
import Arrow from '@/public/icons/arrow'
import { useAnimation } from 'framer-motion'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import SmartphoneIcon from '@material-ui/icons/Smartphone'

const text = {
    smaller: {
        scale: 1,
        x: 0,
    },
    bigger: {
        scale: 1.2,
        x: 13
    }
}

const container = {
    smaller: {
        x: 0
    },
    bigger: {
        x: -20
    },
}

function Contact(props) {
    const [show, setShow] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [media, setMedia] = useState('')
    const [message, setMessage] = useState('')
    const [showButtonAnimation, setShowButtonAnimation] = useState(false)
    const [mediaCount, setMediaCount] = useState([])
    const [sendError, setSendError] = useState(false)
    const [messegeMargin, setMessegeMargin] = useState(100)
    const control = useAnimation()

    const deleteMedia = (id) => {
        console.log(id)
        const newMeidas = mediaCount.filter(item => item.id !== id)
        setMediaCount(newMeidas)
    }

    return (
        <Container
            whileHover={show === false && 'smaller'}
            animate={control}
            variants={show === false && container}
            onClick={() => {
                if (!show) {
                    setShow(true)
                    props.setMinimize(true)
                }
            }}
            style={{
                translateX: show ? '-70vw' : '0px'
            }}
        >
            <Animation
                variants={show === false && text}
                onClick={() => {
                    setShow(!show)
                    props.setMinimize(!props.minimize)
                }}
                style={show ? {
                    rotateY: '180deg',
                    rotateX: '180deg'
                } : {}}
            >
                <Text>{show ? 'CLOSE' : 'CONTACT'}</Text>
                <Arrow />
            </Animation>
            <Center>
                <Form onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <div>
                        <SubTitle>Get in Touch</SubTitle>
                        <Title>Lets Grow Together</Title>
                    </div>
                    <div>
                        <Row>
                            <TextField
                                label="Name"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                style={{
                                    width: 300,
                                    margin: 10,
                                }}
                            />
                            <TextField
                                label="Email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                style={{
                                    width: 300,
                                    margin: 10
                                }}
                            />
                        </Row>
                        <Row alignEnd>
                            <TextField
                                label="Phone"
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value) }}
                                style={{
                                    width: 300,
                                    margin: 10
                                }}
                            />
                            {/* <TextField 
                                label="Media Handles"
                                value={media}
                                onChange={(e) => {setMedia(e.target.value)}} 
                                style={{
                                    width: 300,
                                    margin: 10
                                }}    
                            /> */}
                            <Row width='300px' style={{margin: 10}} justifyStart>
                                <Label>Media <br /> Handles</Label>
                                <div
                                    style={{
                                        marginLeft: 15,
                                        marginTop: 3
                                    }}
                                    onClick={() => {
                                        if (mediaCount.length < 3) {
                                            setMediaCount([
                                                ...mediaCount,
                                                { label: '', value: '', id: mediaCount.length }
                                            ])


                                        }
                                    }}
                                >
                                    <AddCircleOutlineIcon style={{ color: 'black', opacity: 0.6 }} />
                                </div>
                            </Row>
                        </Row>
                        {mediaCount.map(item => {
                            return (
                                <div key={item}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        alignSelf: 'flex-end',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <FormControl
                                        style={{
                                            margin: 10,
                                            width: 100
                                        }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Media</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                        >
                                            <MenuItem value={10}>YouTube</MenuItem>
                                            <MenuItem value={20}>Instagram</MenuItem>
                                            <MenuItem value={30}>TikTok</MenuItem>
                                            <MenuItem value={30}>Twitch</MenuItem>
                                            <MenuItem value={30}>Podcast</MenuItem>
                                        </Select>
                                    </FormControl>
                                    
                                    <TextField 
                                        style={{
                                            margin: 10,
                                            width: 150
                                        }}
                                        label='Username'
                                    />
                                    <div
                                        onClick={() => {
                                            deleteMedia(item.id)
                                        }}
                                    >
                                        <DeleteOutlineIcon style={{color: 'black', opacity: 0.6}} />
                                    </div>
                                   
                                </div>
                            )
                        })}
                        <TextField
                            label="Message"
                            value={message}
                            onChange={(e) => { setMessage(e.target.value) }}
                            style={{
                                width: 700,
                                margin: 10,
                                marginTop: messegeMargin
                            }}
                        />
                    </div>
                    <Row style={{alignItems: 'center'}}>
                        <ButtonContainer>
                            <ButtonAnimation
                                style={{
                                    marginLeft: `${showButtonAnimation ? '30px' : '-94px'}`,
                                }}
                            >
                                {sendError ? 'Error!' : 'Sent!'}
                            </ButtonAnimation>
                            <Button
                                onClick={() => {
                                    setShowButtonAnimation(true)
                                    setTimeout(() => {
                                        setShowButtonAnimation(false)
                                    }, 1000)
                                }}
                            >
                            Send
                            </Button>
                        </ButtonContainer>
                        <Row style={{
                            alignItems: 'center'
                        }}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    // marginRight: -120,
                                    zIndex: 10
                                }}
                            >
                                <Row style={{alignItems: 'center'}}>
                                    <MailOutlineIcon style={{color: '#050608', fontSize: 20}} />
                                    <a href='mailto:>hello@clubhub.vip' style={{color: '#050608', fontSize: 18, margin: 5, marginLeft: 10, textDecoration: 'underline'}}>hello@clubhub.vip</a>
                                </Row>
                                <Row style={{alignItems: 'center', justifyContent: 'flex-start'}}>
                                    <SmartphoneIcon style={{color: '#050608', fontSize: 20}} />
                                    <span style={{color: '#050608', fontSize: 18, margin: 5, marginLeft: 10, textDecoration: 'underline'}}>514-660-2546</span>
                                </Row>
                            </div>
                            {/* <ContactInfoContainer /> */}
                        </Row>
                    </Row>
                </Form>
            </Center>
        </Container>
    )
}

export default Contact