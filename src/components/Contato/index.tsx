import { useDispatch } from 'react-redux'
import { useState } from 'react'

import * as S from './styles'
import { remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, phone, email, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      {estaEditando ? (
        <S.Titulo>Editando: {nome}</S.Titulo>
      ) : (
        <S.Titulo>{nome}</S.Titulo>
      )}
      {estaEditando ? (
        <>
          <br />
          <label htmlFor="phone">Fone:</label>
          <input type="number" name="phone" id="phone" value={phone} />
          <br />
          <label htmlFor="email">E-mail:</label>
          <input type="text" name="email" id="email" value={email} />
          <br />
        </>
      ) : (
        <>
          <S.Descricao>
            <li>
              <strong>Fone:</strong>
              {phone}
            </li>
            <li>
              <strong>E-mail:</strong>
              {email}
            </li>
          </S.Descricao>
        </>
      )}
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
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
