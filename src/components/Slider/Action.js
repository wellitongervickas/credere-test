import React, { useContext, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import { SliderButton } from './styles'
import SliderContext from './context'


const SliderAction = ({ autoPlay, duration }) => {
  const { activatedSlider, setActivatedSlider, maxSlider } = useContext(SliderContext)

  const handleSetNewSlider = useCallback(() => {
    if (activatedSlider < maxSlider) {
      setActivatedSlider(activatedSlider + 1)
    } else {
      setActivatedSlider(0)
    }
  }, [setActivatedSlider, maxSlider, activatedSlider])

  useMemo(() => {
    if (autoPlay) {
      setTimeout(() => {
        handleSetNewSlider()
      }, duration)
    }
  }, [handleSetNewSlider, autoPlay, duration])


  return (
    <SliderButton className="absolute" data-max={maxSlider}>
      <Button onClick={handleSetNewSlider}>
        Próximo
      </Button>
    </SliderButton>
  )
}

SliderAction.propTypes = {
  autoPlay: PropTypes.bool,
  duration: PropTypes.number,
}

SliderAction.defaultProps = {
  autoPlay: false,
  duration: 5000,
}

export default SliderAction
