import React from 'react'
import Slider from './components/Slider'
import sliderMock from './__mocks__/slider.json'

const App = () => {
  const { slides } = sliderMock

  return (
    <>
      <div className="container">
        <Slider>
          {slides.map((props, index) => <Slider.Item key={index} {...props} index={index} />)}
        </Slider>
      </div>
    </>
  )
}

export default App
