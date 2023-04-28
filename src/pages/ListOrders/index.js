import React, { 
  useState,
  useEffect 
} from 'react'
import { useHistory } from 'react-router'

import axios from 'axios'

import mainPhoto from '../../assets/secundaryPhoto.png'
import Trash from '../../assets/trashButton.svg'

import {
  Imagem,
  ContainerItens,
  H1,
  Orders
}
  from "./styles"

import Button from '../../components/Button'

const ListOrders = () => {

  const [orders, setUsers] = useState([])
  const history = useHistory()

  const goBackPage = () => {
    history.push('/')
  }

  useEffect(() => {

    const recover = async () => {

      const { data: recoverOrders } = await axios.get('http://localhost:3001/users')

      setUsers(recoverOrders)
    }

    recover()
  }, [orders])

  const deleteUser = async(orderId) => {

    await axios.delete(`http://localhost:3001/users/${orderId}`)

    const newOrders = orders.filter((orders) => orders.id !== orderId)

    setUsers(newOrders)
  }

  return (
    <ContainerItens>
      <Imagem alt='logo' src={mainPhoto} />
        <H1 className='itensCenter'>Pedidos</H1>
        <ul> {
          orders.map((order) => (
            <Orders key={order.id}>
              <h2>{order.order}</h2> 
              <p>{order.name}</p >

              <button onClick={() => deleteUser(order.id)}>
                <img alt='lata de lixo' src={Trash} />
              </button >

            </Orders>
          ))
        }
        </ul>

        <Button isBack={true} onClick={goBackPage}>Voltar</Button>
    </ContainerItens>
  );
}

export default ListOrders