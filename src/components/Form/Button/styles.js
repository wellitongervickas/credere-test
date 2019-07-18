import styled from 'styled-components'
import { successColor, defaultColor, defaultRadius } from '../../../globalStyles'

export const ButtonElement = styled.button`
  cursor: pointer;
  background-color: transparent;
  box-shadow: inset 0 -1px 0 rgba(0,0,0,0.1);
  border: 1px solid transparent;
  border-radius: ${defaultRadius};
  transition: All 0.3s ease-in;

  &:hover {
    box-shadow: inset 0 -3px 0 rgba(0,0,0,0.1);
  }

  &:active {
    box-shadow: inset 0 0 0 transparent;
    transform: translateY(1px);
  }

  &.button-normal-default {
    background-color: ${defaultColor};
    color: #ffffff;
  }

  &.button-normal-success {
    background-color: ${successColor};
    color: #ffffff;
  }

  &.button-outline-default {
    color: ${defaultColor};
    border-color: ${defaultColor};
  }

  &.button-outline-success {
    color: ${successColor};
    border-color: ${successColor};
  }

  &.button-lg {
    padding: 12px 22px;
  }

  &.button-md {
    padding: 8px 18px;
  }

  &.button-md {
    padding: 6px 16px;
  }
`
