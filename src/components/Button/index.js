import React from 'react'
import PropTypes from 'prop-types'
import { ButtonElement } from './styles'
import Typography from '../Typography'

const Button = ({ children, onClick }) => (
  <ButtonElement
    className="transition-all"
    type="button"
    onClick={onClick}
  >
    <Typography>{children}</Typography>
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
