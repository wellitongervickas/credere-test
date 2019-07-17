import React, {
  useContext, useCallback, useEffect,
} from 'react'
import PropTypes from 'prop-types'
import Button from '../Form/Button'
import { SliderButton } from './styles'
import SliderContext from './context'

const fn = () => {}

const SliderAction = ({ autoPlay, duration }) => {
  const { activatedSlider, setActivatedSlider, maxSlider } = useContext(SliderContext)

  const handleSetNewSlider = useCallback(() => {
    if (activatedSlider < maxSlider) {
      setActivatedSlider(activatedSlider + 1)
    } else {
      setActivatedSlider(0)
    }
  }, [setActivatedSlider, maxSlider, activatedSlider])

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => {
        handleSetNewSlider()
      }, duration)
      return () => clearTimeout(timer)
    }

    return fn
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
