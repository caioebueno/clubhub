import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 40px 170px 40px 100px;
    box-sizing: border-box;
    justify-content: space-between;
`

export const Title = styled.h1`
    font-size: 59px;
    transition: all 0.4s ease;
`

export const SubTitle = styled.h2`
    font-size: 30px;
    transition: all 0.4s ease;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    transition: all 0.4s ease;
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.4s ease;
    transition: all 0.4s ease;
`
export const ItemText = styled.h4`
    text-align: center;
    font-size: 24px;
    ${(props) => props.blue && `
        color: #0378B9;
    `}
    transition: all 0.4s ease;
`

export const IconContainer = styled.div`
    height: 150px;
    transition: all 0.4s ease;
`

export const StyledText = styled.span`
    background-color: #0378B9;
    border-radius: 5px;
    padding: 0px 4px 0px 4px;
    color: #161D28;
`
