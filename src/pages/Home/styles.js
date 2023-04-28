import styled from 'styled-components';

import background from '../../assets/background.png'

export const MainContainer = styled.div`
background: url("${background}");
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;


height: 100vh;
min-height: 100vh;

p{
    display: flex;
    align-self: flex-start;
    padding: 0 0 0 30px;
}
`
export const Imagem = styled.img`
margin-top: 70px;
width: 330px;
height: 340px;
`
export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
export const H1 = styled.h1`
color: #FFFFFF;
margin-top: 25px;
`
export const InputLabel = styled.p`
color: #ffffff;
margin-top: 42px;
`
export const Input = styled.input`
width: 342px;
height: 58px;
border: none;

background: rgba(255, 255, 255, 0.25);
border-radius: 14px;

padding: 19px 139px 18px 15px;

font-style: normal;
font-weight: 250;
font-size: 15px;
line-height: 21px;
outline: none;

color: #FFFFFF;

&::placeholder{
    color: #FFFFFF;
}
`
