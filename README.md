## Credere Test
[Heroku Demo](https://credere-test.herokuapp.com/)


### Start guide

* git clone git@github.com:wellitongervickas/credere-test.git
* cd credere-frontend-test
* yarn 
* yarn start
* yarn build


### Slider

#### - Slider
| Properties | Type | Default | Description |
| ------------- |:-------------| :-------------|:-------------|
| autoPlay | bool | false | Auto change next slider |
| duration | number | 5000 | Time to next slider when use autoPlay  |

#### - Slider item
| Properties | Type | Options | Description |
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

### Typography

| Properties | Type | Options | Description |
| ------------- |:-------------| :-------------|:-------------|
| tag | string | heading, sub-heading, paragraph, span | Set typography type |
| color | string | all regex, rgb and etc... | set typography color |
| emphasys | boolean | true/false | set typography empashys |
| children | node | Component/String | set typography children |

```
import React from 'react'
import Typography from './components/Typography'

const Header = ({ ...props }) => (
  <>
    <Typography tag="span" {...props}>I'm a span</Typography>
    <Typography.Span {...props}>I'm a span to</Typography.Span>
  </>
)

export default Header

```

### Button

| Properties | Type | Options | Description |
| ------------- |:-------------| :-------------|:-------------|
| className | string | optional | Add custom class on button |
| size | string | lg, md, sm | Set Button size |
| modifier | string | normal, outline | Change button appearance |
| theme | string | default, success | Change button color |
| type | string | button, submit | Change button type |
| onClick | function | optional | Set button action when click |
| children | node | Component/String | set button children |


```
import React from 'react'
import Button from './components/Form/Button'

const MyForm = () => (
  <>
    <Button>Im Button LOL with default props</Button>
    <Button
      size="sm"
      modifier="outline"
      type="submit"
      theme="success"
      onClick={() => console.log('my action')}
    >
      Im Button LOL with custom props
    </Button>

  </>
)

export default MyForm

```

### Input

| Properties | Type | Default | Description |
| ------------- |:-------------| :-------------|:-------------|
| field | string | required | Set field id and name |
| label | string | optional | Set field label |
| className | string | optional | Set field custom class |
| validation | function | optional | Set field validation |
| onChange | function | optional | Get field value or do a action when user typing |
| required | boolean | false | Set field is required or not |


```
import React from 'react'
import Input from './components/Form/Input'

const MyForm = () => (
  <>
    <Input 
      field="name"
      label="Type your full name"
      className="my-custom-class"
      validation={() => 'Required field'}
      onChange={(e) => console.log(e)}
      required
    />
  </>
)

export default MyForm

```

### Utils

#### Array

##### - findItemFromKey

This function will return a item from list

```
const list = [{ key: 'name', value: 'im here'}]
const property = 'key'
const item = { key: 'name', value: 'im here'}
const exist = findItemFromKey(list, item, property)

console.log(exist) // { key: 'name', value: 'im here'}
```

###### Props

* list { array } 
* key { string } 
* item { object }

##### - removeFromList

This function will return a new list without a item

```
const list = [{ id: 1 }]
const newlist = removeFromList(list, 'id', 0)
console.log(newlist) // [{ id: 1 }]

const list2 = [{ id: 1 }]
const newlist2 = removeFromList(list, 'id', 1)

console.log(newlist2) // []
```

###### Props

* list { array } 
* property { string } 
* value { object }

#### Font

##### - setFontSizing

This function will return a object with font size and font-height (size + 10)

```
const fontSizes = setFontSizing(12)
const fontSizesBig = setFontSizing(24)

console.log(fontSizes) // {'font-size': '12px','line-height': '22px'}
console.log(fontSizesBig) // {'font-size': '24px','line-height': '34px'}
```

###### Props

* font { number }

##### - isEmphasys

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

##### - cropText

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

##### - requiredField

This function will return a string value with "Campo obrigatório" or empty value when have a length

```
const field = requiredField('')
const fieldWithValue = requiredField('hello friend')

console.log(field) // Campo obrigatório
console.log(fieldWithValue) // empty 
```

###### Props

* value { string }

### Script Test

* yarn test
* yarn test:watch 
* yarn test:coverage

### Script Utils

* yarn lint
* yarn lint:fix
