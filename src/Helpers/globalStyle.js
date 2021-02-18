import styled, { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

// Helps with animation
html, body {
  overflow-x: hidden;
}
`

export const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 1px solid red;
`

export default GlobalStyle
