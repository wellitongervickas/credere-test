import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const Slider = ({
  duration, effect, autoPlay, children,
}) => {
  console.log(duration, effect, autoPlay)

  return (
    <div>
      {children}
    </div>
  )
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  effect: PropTypes.oneOf(['fade-in', 'slide-in-left']),
  autoPlay: PropTypes.bool,
}

Slider.defaultProps = {
  duration: 500,
  effect: 'slide-in-left',
  autoPlay: false,
}

Slider.Item = Item

export default Slider
