import styled from "styled-components";

export const WeatherDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e0e0e0;
    padding: 15px;
    border-radius: 10px;
    max-width: 400px;
    margin: 0 auto;
`

export const WeatherCard = styled.div`
    background-color: #fff;
    border-right: 5px;
    padding: 10px;
    margin: 5px 0;
    text-align: center;
    width: 100%;
`

export const Temperature = styled.p`
    font-size: 24px;
    font-weight: bold;
`

export const Description = styled.p`
font-size: 18px;
    color: #555;
`
