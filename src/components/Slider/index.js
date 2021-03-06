import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import { SliderWrapper, SliderList } from './styles'
import { SliderContextProvider } from './context'
import SliderAction from './Action'

const Slider = ({ children, autoPlay, duration }) => {
  const sliderCount = useMemo(() => (Array.isArray(children)
    ? (children.length - 1)
    : 1),
  [children])

  if (children) {
    return (
      <SliderContextProvider count={sliderCount}>
        <SliderWrapper className="relative">
          <SliderList className="full-content relative">
            {children}
          </SliderList>
          <SliderAction autoPlay={autoPlay} duration={duration} />
        </SliderWrapper>
      </SliderContextProvider>
    )
  }

  return null
}

Slider.propTypes = {
  children: PropTypes.node,
  autoPlay: PropTypes.bool,
  duration: PropTypes.number,
}

Slider.defaultProps = {
  children: null,
  autoPlay: false,
  duration: 5000,
}

Slider.Item = Item

export default Slider
