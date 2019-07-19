import React from 'react'
import sliderMock from './__mocks__/slider.json'
import { Slider, Typography, Register } from './components'

const App = () => {
  const { slides } = sliderMock

  return (
    <>
      <div className="container">
        <Typography.Heading>Form</Typography.Heading>
        <Register />
      </div>
      <div className="container">
        <Typography.Heading>Slider Default</Typography.Heading>
        <Slider>
          {slides.map((props, index) => <Slider.Item key={index} {...props} index={index} />)}
        </Slider>
      </div>
      <div className="container">
        <Typography.Heading>Slider Auto Play (5s)</Typography.Heading>
        <Slider duration={5000} autoPlay>
          {slides.map((props, index) => <Slider.Item key={index} {...props} index={index} />)}
        </Slider>
      </div>
    </>
  )
}

export default App
