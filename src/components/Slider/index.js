import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import Button from '../Button'
import { SliderWrapper, SliderList, SliderButton } from './styles'

const Slider = ({
  duration, effect, autoPlay, slides,
}) => (
  <SliderWrapper data-auto={autoPlay} data-effect={effect} data-duration={duration}>
    <SliderList className="full-content">
      {slides.map((props, index) => (
        <Item key={index} index={index} {...props} />
      ))}
    </SliderList>
    <SliderButton>
      <Button>
        Próximo
      </Button>
    </SliderButton>
  </SliderWrapper>
)

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
  duration: PropTypes.number,
  effect: PropTypes.oneOf(['fade-in', 'slide-in-left']),
  autoPlay: PropTypes.bool,
}

Slider.defaultProps = {
  duration: 5000,
  effect: 'fade-in',
  autoPlay: false,
}

export default Slider
