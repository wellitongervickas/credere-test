import React from 'react'
import Slider from './components/Slider'
import sliderMock from './__mocks__/slider.json'
import Typography from './components/Typography'

const App = () => {
  const { slides } = sliderMock

  return (
    <>
      <div className="container">
        <Typography.SubHeading>Slider Default</Typography.SubHeading>
        <Slider>
          {slides.map((props, index) => <Slider.Item key={index} {...props} index={index} />)}
        </Slider>
      </div>
      <div className="container">
        <Typography.SubHeading>Slider Auto Play (5s)</Typography.SubHeading>
        <Slider duration={5000} autoPlay>
          {slides.map((props, index) => <Slider.Item key={index} {...props} index={index} />)}
        </Slider>
      </div>
    </>
  )
}

export default App
