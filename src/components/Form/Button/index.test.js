import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Button from '.'

describe('Button Component', () => {
  it('should render button component', () => {
    const tree = renderer.create(
      <>
        <Button>button</Button>
        <Button modifier="normal">normal Button</Button>
        <Button modifier="outline">outline Button</Button>
        <Button size="lg">lg Button</Button>
        <Button size="md">md Button</Button>
        <Button size="sm">sm Button</Button>
        <Button theme="default">default Button</Button>
        <Button modifier="outline" theme="default">outline default Button</Button>
        <Button theme="success">success Button</Button>
        <Button modifier="outline" theme="success">outline success Button</Button>
      </>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
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
