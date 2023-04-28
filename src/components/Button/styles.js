import styled from "styled-components";

export const Button = styled.button`
background: ${props => props.isBack ? ' rgba(255, 255, 255, 0.14)' : '#D93856'};
color: #ffffff;

padding: 24px 113px;
cursor: pointer;

width: 342px;
height: 68px;

font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;
border: none;

margin: 75px 13px 51px 13px;

&:hover{
    opacity: 0.5;
}

&:active{
    opacity: 0.8;
}
`