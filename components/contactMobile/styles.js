import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #0378B9;
    height: 88%;
    width: 100vw;
    transition: all 0.5s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
`

export const Label = styled.span`
    font-size: 20px;
    font-weight: 600;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Button = styled.button`
    color: #050608;
    font-size: 20px;
    font-weight: bold;
    background-color: transparent;
    border: none;
`

