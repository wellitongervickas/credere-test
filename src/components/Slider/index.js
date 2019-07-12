import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import { SliderWrapper, SliderList } from './styles'
import { SliderContextProvider } from './context'
import SliderAction from './Action'

const Slider = ({ children }) => {
  const sliderCount = Array.isArray(children) ? (children.length - 1) : 1

  return (
    <SliderContextProvider count={sliderCount}>
      <SliderWrapper>
        <SliderList className="full-content">
          {children}
        </SliderList>
        <SliderAction />
      </SliderWrapper>
    </SliderContextProvider>
  )
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
}
Slider.Item = Item

export default Slider
