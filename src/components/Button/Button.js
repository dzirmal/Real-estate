import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#000D1A' : '#CD853F')};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  color: ${({ primary }) => (primary ? '#fff' : '#000D1A')};
  font-size: ${({ big }) => (big ? '10px ' : '14px')};

  &:hover {
    transform: translateY(-2px);
  }
`
