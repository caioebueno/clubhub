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
    ${(props) => props.alignEnd && `
        align-items: flex-end;
    `}
    width: ${(props) =>props.width};
    ${(props) => props.justifyStart && `
        justify-content: flex-start;
    `}
    transition: all 0.5s ease;
`

export const Button = styled.button`
    padding: 10px 15px 10px 15px;
    border-radius: 5px;
    color: #050608;
    font-weight: bold;
    background-color: transparent;
    /* background-color: rgba(3, 120, 185, 0.73); */
    border: none;
    align-self: flex-start;
    font-size: 22px;
    overflow: hidden;
    /* margin-left: -94px; */
    cursor: pointer;
`

export const Center = styled.div`
    width: 67vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ButtonAnimation = styled.div`
    position: relative;
    width: 84px;
    height: 46px;
    background-color: transparent;
    transition: all 0.3s ease;
    color: #050608;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: bolder;
    
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    width: 94px;
    align-self: flex-start;
    background-color: transparent;
    /* background-color: red */
`

export const Label = styled.label`
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    opacity: 0.6;
`

export const ContactInfoContainer = styled.div`
    width: 200px;
    height: 100px;
    border-radius: 5px;
    background-color: #0378B9;
`
