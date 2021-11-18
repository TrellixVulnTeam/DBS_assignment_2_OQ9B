import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto;
    width: 900px;
    height: 380px;
    margin: auto;
    margin-top: 100px;
    padding-bottom: 20px;
    background-color: #E5E5E5 ;

`
export const Title = styled.div`
    background-color: #C4C4C4;
    text-align: center;
    font-size:20px;
    padding: 5px;
    font-weight: bold;
    height: 50px;
`

export const DesContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`

export const Des = styled.div`
    box-sizing: border-box;
    margin: 15px 100px;
    background-color:#E5E5E5;
    font-size: 18px;
`
export const DesName = styled.span`
    fontWeight: bold;
    font-size: 20px;
`