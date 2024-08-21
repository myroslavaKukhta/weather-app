import styled from "styled-components";

export const WeatherSearchContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 10px;
    max-width: 400px;
    margin: 0 auto;
    background-color: #f9f9f9;
`
export const Title = styled.h1`
margin-bottom: 20px;
`

export const WeatherInput = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    box-sizing: border-box;
`

export const WeatherButton = styled.button`
padding: 10px 20px;
    background-color: #007bff;
    color: aliceblue;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    
    &:hover {
        background-color: #0056b3;
    }
`

