import React, { useState } from 'react'

// STYLED COMPONENTS
import {Container, Text, Animation} from './styles'

// ICON IMPORT
import Arrow from '@/public/icons/arrow'

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
    }
}

function Contact() {
    const [show, setShow] = useState(false)

    return (
        <Container
            whileHover='bigger'
            variants={container}
            onClick={() => {
                setShow(true)
            }}
        >
            { 
                show
                    ?
                    <h1>Show</h1>
                    :
                    <Animation
                        variants={text}
                    >
                        <Text>CONTACT</Text>
                        <Arrow />
                    </Animation>
            }
        </Container>
    )
}

export default Contact