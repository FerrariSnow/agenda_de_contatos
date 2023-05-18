import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, Titulo } from '../../styles'

import { Campo, Form } from './styles'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(nome, phone, email, 99)
    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <Form onSubmit={cadastrarContato}>
      <Titulo>Novo contato</Titulo>
      <Campo
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        type="text"
        placeholder="Nome Completo do Contato"
        required
      />
      <Campo
        value={phone}
        onChange={(evento) => setPhone(evento.target.value)}
        type="text"
        placeholder="Telefone do Contato"
        required
      />
      <Campo
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        type="text"
        placeholder="Email do Contato"
        required
      />
      <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
    </Form>
  )
}

export default Formulario
