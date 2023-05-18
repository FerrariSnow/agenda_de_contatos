import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  nome,
  phone: phoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (phoneOriginal.length > 0) {
      setPhone(phoneOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [phoneOriginal, emailOriginal])

  function cancelaEdicao() {
    setEstaEditando(false)
    setPhone(phoneOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      {estaEditando ? (
        <S.Titulo>Editando: {nome}</S.Titulo>
      ) : (
        <S.Titulo>{nome}</S.Titulo>
      )}
      <S.Descricao>
        <br />
        <label htmlFor="phone">Fone:</label>
        <input
          disabled={!estaEditando}
          type="number"
          name="phone"
          id="phone"
          value={phone}
          onChange={(evento) => setPhone(evento.target.value)}
        />
        <br />
        <label htmlFor="email">E-mail:</label>
        <input
          disabled={!estaEditando}
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <br />
      </S.Descricao>

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    phone: phoneOriginal,
                    email: emailOriginal,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelaEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
