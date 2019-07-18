## Credere Front-end Test

### Quick Start

* git clone git@bitbucket.org:gervickas/credere-frontend-test.git
* cd credere-frontend-test
* yarn 
* yarn start
* yarn build

### Utils

#### Array

##### existsOnList

This function will return a value from list

```
const item = { key: 'name', value: 'im here'}
const list = [{ key: 'name', value: 'im here'}]
const property = 'key'
const exist = existsOnList(item, property, list)

console.log(exist) // { key: 'name', value: 'im here'}
```

###### Props

* item { object }
* property { string } 
* list { array } 


#### Font

##### setFontSizing

This function will return a object with font size and font-height (size + 10)

```
const fontSizes = setFontSizing(12)
const fontSizesBig = setFontSizing(24)

console.log(fontSizes) // {'font-size': '12px','line-height': '22px'}
console.log(fontSizesBig) // {'font-size': '24px','line-height': '34px'}
```

###### Props

* font { number }

##### isEmphasys

This function will return a string value to use in css

```
const emphasys = isEmphasys(true) 
const notEmphasys = isEmphasys(false) 

console.log(emphasys) // font-weight: 800
console.log(notEmphasys) // empty
```

###### Props
* emphasys { boolean } 

#### String

##### cropText

This function will return a full text or a trim text with 3 dots when text will cross max chars value

```
const text = cropText('my name is luke cage')
const trimText = cropText('my name is luke cage', 5)

console.log(text) // my name is luke cage
console.log(trimText) // my na...
```

###### Props

* text { string }
* max { number } default 80

#### Validation

##### requiredField

This function will return a string value with "Campo obrigatório" or empty value when have a length

```
const field = requiredField('')
const fieldWithValue = requiredField('hello friend')

console.log(field) // Campo obrigatório
console.log(fieldWithValue) // empty 
```

###### Props

* value { string }

### Slider

#### Slider
| Properties | Type | Default | Description |
| ------------- |:-------------| :-------------|:-------------|
| autoPlay | bool | false | Auto change next slider |
| duration | number | 5000 | Time to next slider when use autoPlay  |


#### Slider item
| Properties | Type | Default | Description |
| ------------- |:-------------| :-------------|:-------------|
| image | string | is required | Image of Slider  |
| title | string | is required | Title of slider  |
| subTitle | string | optional | Sub title of slider   |
| description | string | optional | Title of slider |
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
