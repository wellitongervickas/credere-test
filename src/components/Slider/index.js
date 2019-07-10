import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const Slider = ({ children }) => (
  <div>
    {children}
  </div>
)

Slider.propTypes = {
  children: PropTypes.node.isRequired,
}

Slider.Item = Item

export default Slider
