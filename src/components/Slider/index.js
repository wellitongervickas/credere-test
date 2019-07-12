import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import Button from '../Button'
import { SliderWrapper, SliderList, SliderButton } from './styles'
import SliderContext, { SliderContextProvider } from './context'

const SliderAction = () => {
  const { activatedSlider, setActivatedSlider, maxSlider } = useContext(SliderContext)
  const handleSetNewSlider = () => {
    if (activatedSlider < maxSlider) {
      setActivatedSlider(activatedSlider + 1)
    } else {
      setActivatedSlider(0)
    }
  }

  return (
    <SliderButton data-max={maxSlider}>
      <Button onClick={handleSetNewSlider}>
        Próximo
      </Button>
    </SliderButton>
  )
}

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
