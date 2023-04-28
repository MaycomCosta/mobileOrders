import React, {useState,useRef,}from 'react'
import { useHistory } from 'react-router'

import axios from 'axios'

import mainPhoto from '../../assets/mainPhoto.png'

import {
  MainContainer,
  Imagem,
  ContainerItens,
  H1,
  InputLabel,
  Input
}
  from "./styles"

import Button from '../../components/Button'

const App = () => {

  const [orders, setUsers] = useState([])

  const inputOrder = useRef()
  const inputName = useRef()

  const history = useHistory()

  const addNewOrder = async () => {

    const { data: newOrder } = await axios.post('http://localhost:3001/users', {
      order: inputOrder.current.value,
      name: inputName.current.value
    })

    console.log(newOrder)

    setUsers([ ...orders, newOrder,])

    history.push('/AllOrders')

}

  return (
    <MainContainer>
      <Imagem alt='logo' src={mainPhoto}/>
      <ContainerItens>
      <H1 className='itensCenter'>Faça seu pedido!</H1>

      <InputLabel>Pedido</InputLabel>
      <Input ref={inputOrder} placeholder='Seu pedido' />

      <InputLabel>Nome do Cliente</InputLabel>
      <Input ref={inputName} placeholder='Seu nome' />

      <Button onClick={addNewOrder}>Novo Pedido</Button>

      </ContainerItens>
    </MainContainer>
  );
}

export default App