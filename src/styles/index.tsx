import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  list-style: none;
}`

export const Container = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
`

export default EstiloGlobal
