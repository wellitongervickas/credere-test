## Credere Front-end Test

### Quick Start
* yarn 
* yarn start
* yarn build

### Slider

| Properties | Type | Default | Description |
| ------------- |:-------------| :-------------|:-------------|
| image | string | is required | Image of Slider  |
| title | string | is required | Title of slider  |
| subTitle | string | optional | Sub title of slider with max 120 characters or will crop text  |
| description | string | optional | Title of slider with max 180 characters or will crop text |
| template | string | default, template_1, template_2, template_3 | Template of slider with 4 template options |


```
import React from 'react'
import Slider from './components/Slider'

const App = () => {
  const slides = [
    {
      template: 'template_2',
      image: 'https://img.ibxk.com.br/2019/07/10/10153244993210.jpg',
      title: 'Lorem ipsum dolor sit amet',
      subTitle: 'Sed non dui sed purus hendrerit aliquet a nec magna. Nulla et nisl eget nulla imperdiet mattis?',
      description: 'Aliquam facilisis tempus neque, ac accumsan elit bibendum non. Duis molestie libero porta tortor placerat, vitae cursus diam placerat. Fusce feugiat libero erat, suscipit venenatis purus eleifend non',
    }
  ]

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

```

### Test
* yarn test
* yarn test:watch 
* yarn test:coverage


### Utils
* yarn lint
* yarn lint:fix
