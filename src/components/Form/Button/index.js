import React from 'react'
import PropTypes from 'prop-types'
import { ButtonElement } from './styles'
import Typography from '../../Typography'

const Button = ({ children, onClick, ...props }) => (
  <ButtonElement
    className="transition-all"
    onClick={onClick}
    {...props}
  >
    <Typography>{children}</Typography>
  </ButtonElement>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
}

export default Button
