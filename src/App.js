import React from 'react'
import Slider from './components/Slider'
import sliderMock from './__mocks__/slider.json'

const App = () => {
  const { slides, configurations } = sliderMock

  return (
    <>
      <div className="container">
        <Slider
          duration={configurations.duration}
          effect={configurations.effect}
          autoPlay={configurations.autoPlay}
          slides={slides}
        />
      </div>
    </>
  )
}

export default App
