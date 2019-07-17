import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../../Typography'

const SubTitle = ({ text, color }) => (text ? (
  <Typography tag="sub-heading" color={color}>
    {text}
  </Typography>
) : null)

SubTitle.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
}

SubTitle.defaultProps = {
  color: '#FFFFFF',
  text: null,
}

export default SubTitle
