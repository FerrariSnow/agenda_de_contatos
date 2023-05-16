import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const ContatoSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato('Jubileu da Sila', 12345678901, 'masfuiasyeg@gmail.com', 1),
    new Contato('Jango Mango', 12345678901, 'jnagoheuhsi@gmail.com', 2),
    new Contato('Marco Polo', 12345678901, 'marcopolo@gmail.com', 3),
    new Contato('Jubileu da Sila', 12345678901, 'masfuiasyeg@gmail.com', 4),
    new Contato('Jango Mango', 12345678901, 'jnagoheuhsi@gmail.com', 5),
    new Contato('Marco Polo', 12345678901, 'marcopolo@gmail.com', 6)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = ContatoSlice.actions

export default ContatoSlice.reducer
