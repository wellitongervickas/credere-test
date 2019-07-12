import React, { useContext } from 'react'
import Button from '../Button'
import { SliderButton } from './styles'
import SliderContext from './context'

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

export default SliderAction
