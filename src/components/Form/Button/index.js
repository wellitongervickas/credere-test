import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { ButtonElement } from './styles'

const Button = ({
  children, onClick,
  size, modifier, theme,
  ...props
}) => (
  <ButtonElement
    className={classnames(
      `button-${size}`,
      `button-${modifier}-${theme}`,
      'transition-all',
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </ButtonElement>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  modifier: PropTypes.oneOf(['outline', 'normal']),
  theme: PropTypes.oneOf(['default', 'success']),
}

Button.defaultProps = {
  size: 'lg',
  modifier: 'normal',
  type: 'button',
  theme: 'default',
  onClick: () => {},
}

export default Button
