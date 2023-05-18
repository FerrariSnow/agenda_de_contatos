import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Jubileu da Sila',
      phone: '12345678901',
      email: 'masfuiasyeg@gmail.com',
      id: 1
    },
    {
      nome: 'Jango Mango',
      phone: '12345678901',
      email: 'jnagoheuhsi@gmail.com',
      id: 2
    },
    {
      nome: 'Marco Polo',
      phone: '12345678901',
      email: 'marcopolo@gmail.com',
      id: 3
    }
  ]
}

const ContatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaTarefa = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoExiste) {
        alert('Este contato já está cadastrado.')
      } else {
        state.itens.push(action.payload)
        alert('Contato cadastrado.')
      }
    }
  }
})

export const { remover, editar, cadastrar } = ContatoSlice.actions

export default ContatoSlice.reducer
