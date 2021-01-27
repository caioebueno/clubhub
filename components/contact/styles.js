import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Container = styled(motion.div)`
    height: 100%;
    padding: 0px 50px 0px 30px;
    background-color: #0378B9; 
    position: fixed;
    right: 0;
    margin-right: -20px;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const Text = styled(motion.span)`
    font-size: 26px;
    writing-mode: vertical-rl;
    margin-bottom: 15px;
`

export const Animation = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`