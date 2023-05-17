import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <MainContainer>
      <h1>Lista de contatos</h1>
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <Contato id={c.id} nome={c.nome} phone={c.phone} email={c.email} />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
