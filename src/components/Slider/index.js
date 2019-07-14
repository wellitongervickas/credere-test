import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import { SliderWrapper, SliderList } from './styles'
import { SliderContextProvider } from './context'
import SliderAction from './Action'

const Slider = ({ children }) => {
  const sliderCount = useMemo(() => (Array.isArray(children)
    ? (children.length - 1)
    : 1),
  [children])

  return (
    <SliderContextProvider count={sliderCount}>
      <SliderWrapper className="relative">
        <SliderList className="full-content relative">
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
