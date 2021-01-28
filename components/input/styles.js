import styled from 'styled-components'

export const Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #161D28;
    padding: 10px;
    font-size: 18px;
    color: #161D28;
    width: ${(props) => props.width};
    margin: 15px 0px 15px 0px;
    margin-top: ${(props) => props.mt};
`