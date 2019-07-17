import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Button from '.'

describe('Button Component', () => {
  it('should render button component', () => {
    const element = renderer.create(<Button>Default Button</Button>).toJSON()
    expect(element).toMatchSnapshot()
  })

  it('should match component type', () => {
    const element = renderer.create(<Button>Default Button</Button>).toJSON()
    expect(element).toMatchObject({
      type: 'button',
    })
  })

  it('should do button action', () => {
    const mockCallBack = jest.fn()
    const element = mount(<Button onClick={mockCallBack}>Do!</Button>).find('button')
    element.simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })

  it('should do button action without props', () => {
    const element = mount(<Button>Do!</Button>).find('button')
    const mockCallBack = jest.fn(() => element.simulate('click'))
    mockCallBack()

    expect(mockCallBack.mock.calls.length).toEqual(1)
  })
})
