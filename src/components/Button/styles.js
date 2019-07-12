import styled from 'styled-components'

export const ButtonElement = styled.button`
  cursor: pointer;
  background-color: #f60d02;
  box-shadow: inset 0 -1px 0 rgba(0,0,0,0.1);
  border: 0;
  padding: 12px 22px;
  color: #ffffff;
  border-radius: 4px;
  transition: All 0.3s ease-in;

  &:hover {
    box-shadow: inset 0 -3px 0 rgba(0,0,0,0.1);
  }

  &:active {
    box-shadow: inset 0 0 0 transparent;
    transform: translateY(1px);
  }
`
