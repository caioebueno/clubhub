import React, { useState } from 'react'

// STYLED COMPONENTS
import {
    Container, Text, Animation, Title,
    SubTitle, Form, Row, Button
} from './styles'

// COMPONENTS IMPORT
import Input from '@/components/input'

// ICON IMPORT
import Arrow from '@/public/icons/arrow'
import { useAnimation } from 'framer-motion'

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
    const control = useAnimation()

    return (
        <Container
            whileHover={show === false && 'smaller'}
            animate={control}
            variants={show === false && container}
            onClick={() => {
                if(!show){
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
                    rotateY: '180deg'
                } : {}}
            >
                <Text>{show ? 'CLOSE' : 'CONTACT'}</Text>
                <Arrow />
            </Animation>
            <Form>
                <div>
                    <SubTitle>Get in Touch</SubTitle>
                    <Title>Lets Grow Together</Title>
                </div>
                <div>
                    <Row>
                        <Input 
                            placeholder='Name'
                            width='300px'
                        />
                        <Input 
                            placeholder='Email'
                            width='300px'
                        />
                    </Row>
                    <Row>
                        <Input 
                            placeholder='Phone'
                            width='300px'
                        />
                        <Input 
                            placeholder='Media Handles'
                            width='300px'
                        />
                    </Row>
                    <Input 
                        placeholder='Message'
                        width='690px'
                        mt='120px'
                    />
                </div>
                <Button>Send</Button>
            </Form>
        </Container>
    )
}

export default Contact