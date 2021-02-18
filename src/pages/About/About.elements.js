import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Rectangle = styled(motion.div)`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: green;
  cursor: pointer;
`
