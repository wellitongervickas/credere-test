import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../../Typography'
import { DescriptionWrapper } from './styles'

const Description = ({ text, color }) => (text ? (
  <DescriptionWrapper className="flex-column-center">
    <Typography tag="paragraph" color={color}>
      {text}
    </Typography>
  </DescriptionWrapper>
) : null)

Description.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}

Description.defaultProps = {
  color: '#FFFFFF',
  text: null,
}

export default Description
