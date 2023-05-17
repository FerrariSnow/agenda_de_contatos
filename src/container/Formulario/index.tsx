import { MainContainer, Titulo } from '../../styles'

const Formulario = () => (
  <MainContainer>
    <Titulo>Novo contato</Titulo>
    <form>
      <input
        type="text"
        name="nome"
        id="nome"
        placeholder="Nome Completo do Contato"
      />
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Telefone do Contato"
      />
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email do Contato"
      />
      <button type="submit">Cadastrar</button>
    </form>
  </MainContainer>
)

export default Formulario
