import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Container = styled(motion.div)`
    height: 100%;
    width: 70vw;
    padding: 0px 50px 0px 30px;
    background: linear-gradient(107.28deg, #0378B9 20.24%, #FFFFFF 124.18%);
    box-shadow: -14px 4px 27px rgba(0, 0, 0, 0.5);
    position: fixed;
    right: 0;
    margin-right: -70vw;
    top: 0;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
    transition: all 0.4s ease;
`

export const Title = styled.h1`
    color: #161D28;
    font-size: 44px;
`

export const SubTitle = styled.h3`
    color: #161D28;
    font-size: 18px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 50px 0px 50px 0px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Button = styled.button`
    padding: 15px 25px 15px 25px;
    border-radius: 5px;
    background-color: rgba(3, 120, 185, 0.73);
    border: none;
    align-self: flex-end;
    font-size: 18px;
`