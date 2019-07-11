import React from 'react'
import PropTypes from 'prop-types'
import { ButtonElement } from './styles'

const Button = ({ children, onClick }) => (
  <ButtonElement
    type="button"
    onClick={onClick}
  >
    {children}
  </ButtonElement>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  onClick: () => {},
}

export default Button
