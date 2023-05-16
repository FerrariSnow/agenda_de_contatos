import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <Container>
      <h1>Lista de contatos</h1>
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <Contato id={c.id} nome={c.nome} phone={c.phone} email={c.email} />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
