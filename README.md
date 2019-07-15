## Credere Front-end Test

### Quick Start

* git clone git@bitbucket.org:gervickas/credere-frontend-test.git
* cd credere-frontend-test
* yarn 
* yarn start
* yarn build

### Slider

#### Slider item
| Properties | Type | Default | Description |
| ------------- |:-------------| :-------------|:-------------|
| autoPlay | bool | false | Auto change next slider |
| duration | number | 5000 | Time to next slider when use autoPlay  |


#### Slider item
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
        <Slider autoPlay={true} duration={5000}>
          {slides.map((props, index) => <Slider.Item key={index} {...props} index={index} />)}
        </Slider>
      </div>
    </>
  )
}

export default App

```

![template_2](https://raw.githubusercontent.com/meucredere/frontend-test/master/images/news/layout-2.jpg)

### Test

* yarn test
* yarn test:watch 
* yarn test:coverage


### Utils

* yarn lint
* yarn lint:fix
