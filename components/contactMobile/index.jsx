import React, { useState } from 'react'

// STYLED COMPONENTS
import { Container, Label, Row, Button } from './styles'

//ICON IMPORT
import Arrow from '../../public/icons/arrow'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import SmartphoneIcon from '@material-ui/icons/Smartphone'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

function Contact(props) {
    const [show, setShow] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [media, setMedia] = useState('')
    const [mediaCount, setMediaCount] = useState([{ label: '', value: '', id: 0 }])
    const [message, setMessage] = useState('')

    const deleteMedia = (id) => {
        console.log(id)
        const newMeidas = mediaCount.filter(item => item.id !== id)
        setMediaCount(newMeidas)
    }

    return (
        <Container
            onClick={() => {
                if (show === false) {
                    setShow(true)
                    // document.body.style.overflow='hidden'
                }
            }}
            style={show ? {} : {
                transform: 'translateY(91%)'
            }}
        >
            <Row style={{
                alignItems: 'center',
                marginTop: '2.5vh',
                marginLeft: 10
            }}
            onClick={() => {
                setShow(false)
                // document.body.style.overflow='scroll'

            }}
            >
                <Label

                >{show ? 'CLOSE' : 'CONTACT'}</Label>
                <div
                    style={{
                        transform: `${show ? 'rotate(270deg)' : 'rotate(90deg)'}`,
                        marginLeft: 10,
                        marginBottom: 3
                    }}
                >
                    <Arrow />
                </div>
            </Row>
            <span
                style={{
                    color: '#050608',
                    fontSize: 18,
                    marginTop: 30
                }}
            >Get in Touch</span>
            <span
                style={{
                    color: '#050608',
                    fontSize: 25,
                    marginTop: 15
                }}
            >Lets Grow Together</span>
            <TextField
                label='Name'
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
                style={{
                    margin: 20,
                    width: '80vw',
                }}
            />
            <TextField
                label='Email'
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                style={{
                    margin: 20,
                    width: '80vw',
                }}
            />
            <TextField
                label='Phone'
                value={phone}
                onChange={(e) => {
                    setPhone(e.target.value)
                }}
                style={{
                    margin: 20,
                    width: '80vw',
                }}
            />
            <Row style={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '80vw',
                margin: 20
            }}>
                <span style={{
                    fontWeight: 400,
                    color: 'black',
                    opacity: 0.6
                }}>Media Handles</span>
                <div
                    style={{
                        display: 'flex',
                        marginLeft: 10
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
                    <AddCircleOutlineIcon style={{
                        color: '#050608',
                        opacity: 0.6,
                        fontSize: 22
                    }} />
                </div>
            </Row>
            {mediaCount.map(item => {
                return (
                    <Row key={item}
                        style={{
                            alignItems: 'center'
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
                            label='Username'
                        />
                        <div
                            style={{marginTop: 15}}
                            onClick={() => {
                                deleteMedia(item.id)
                            }}
                        >
                            <DeleteOutlineIcon style={{
                                color: 'black',
                                opacity: 0.6
                            }}/>
                        </div>
                    </Row>
                )
            })}
            <TextField
                label='Message'
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value)
                }}
                style={{
                    margin: 20,
                    width: '80vw',
                }}
            />
            <Button
                style={{
                    marginTop: 10
                }}
            >
                Send
            </Button>
            <Row style={{
                alignItems: 'center',
                position: 'relative',
                marginBottom: 20,
                marginTop: 60
            }}>
                <Row style={{
                    alignItems: 'center',
                    marginTop: 0
                }}>
                    <MailOutlineIcon style={{
                        color: '#050608'
                    }} />
                    <span
                        style={{
                            marginLeft: 10,
                            color: '#050608',
                            textDecoration: 'underline'
                        }}
                    >hello@clubhub.vip</span>
                </Row>
                <Row style={{
                    alignItems: 'center',
                    marginTop: 0,
                    marginLeft: 15
                }}>
                    <SmartphoneIcon style={{
                        color: '#050608'
                    }} />
                    <span
                        style={{
                            marginLeft: 10,
                            color: '#050608',
                            textDecoration: 'underline'
                        }}
                    >514-660-2546</span>
                </Row>
            </Row>
        </Container>
    )
}

export default Contact