import styled from 'styled-components'
import _var from '../../styles/var'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px #00000040;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Descricao = styled.ul`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid #0000001a;
  padding-top: 16px;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${_var.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${_var.vermelho};
`
