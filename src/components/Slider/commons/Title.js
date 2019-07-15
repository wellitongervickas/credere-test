import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../../Typography'

const Title = ({ text, color }) => (
  <Typography tag="heading" color={color} emphasys>
    {text}
  </Typography>
)

Title.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

Title.defaultProps = {
  color: '#FFFFFF',
}

export default Title
