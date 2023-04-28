import styled from "styled-components";

import background from "../../assets/background.png";

export const ContainerItens = styled.div`
  background: url("${background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  min-height: 100vh;
`;
export const Imagem = styled.img`
  margin-top: 70px;
  width: 246px;
  height: 354px;
  background-image: none;
`;
export const H1 = styled.h1`
  color: #ffffff;
  margin-top: 25px;
  margin-bottom: 50px;
`;
export const Orders = styled.li`
  width: 342px;
  height: 101px;
  margin-bottom: 16px;

  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  color: #ffffff;

  text-decoration: none;
  border: none;
  outline: none;

h2 {
    align-self: flex-start;
    padding: 15px 0 0 27px;
    font-style: normal;
    font-weight: 100;
    font-size: 17px;
    line-height: 21px;
}

  p {
    align-self: flex-start;
    padding: 25px 0 15px 27px;
    font-weight: 500;
    font-size: 18px;    
    line-height: 20px;
  }

  button {
    background: none;
    cursor: pointer;
    border: none;
    position: absolute;
    margin-right: 15px;
  }
`;
