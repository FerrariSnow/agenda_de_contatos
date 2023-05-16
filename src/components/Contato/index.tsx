import { useState } from 'react'
import * as S from './styles'

type Props = {
  nome: string
  phone: number
  email: string
}

const Contato = ({ nome, phone, email }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      {estaEditando ? (
        <S.Titulo>Editando: {nome}</S.Titulo>
      ) : (
        <S.Titulo>{nome}</S.Titulo>
      )}
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
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
