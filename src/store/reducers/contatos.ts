import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Jubileu da Sila',
      phone: 12345678901,
      email: 'masfuiasyeg@gmail.com',
      id: 1
    },
    {
      nome: 'Jango Mango',
      phone: 12345678901,
      email: 'jnagoheuhsi@gmail.com',
      id: 2
    },
    {
      nome: 'Marco Polo',
      phone: 12345678901,
      email: 'marcopolo@gmail.com',
      id: 3
    },
    {
      nome: 'Tonho Silveira',
      phone: 12345678901,
      email: 'masfuiasyeg@gmail.com',
      id: 4
    },
    {
      nome: 'Cody Jinks',
      phone: 12345678901,
      email: 'jnagoheuhsi@gmail.com',
      id: 5
    },
    {
      nome: 'Polo Marco',
      phone: 12345678901,
      email: 'marcopolo@gmail.com',
      id: 6
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
    }
  }
})

export const { remover } = ContatoSlice.actions

export default ContatoSlice.reducer
