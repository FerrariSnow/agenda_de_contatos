import Contato from '../../components/Contato'
import { Container } from './styles'

const contatos = [
  {
    nome: 'bartolomeu arruda',
    phone: 499992318,
    email: 'aishas9ufh@gmail.com'
  },
  {
    nome: 'astolfo josé',
    phone: 457941321851,
    email: 'asfasdf12@gmail.com'
  }
]

const ListaDeContatos = () => (
  <Container>
    <h1>Lista de contatos</h1>
    <ul>
      {contatos.map((c) => (
        <li key={c.nome}>
          <Contato nome={c.nome} phone={c.phone} email={c.email} />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeContatos
