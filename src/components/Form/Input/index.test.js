import React from 'react'
import renderer from 'react-test-renderer'
import Input from '.'

describe('Input Component', () => {
  it('should render input component', () => {
    const element = renderer.create(
      <>
        <Input field="input" />
        <Input label="My Input" field="input" />
        <Input label="My Input" field="input" required />
        <Input className="my-class" label="My Input" field="input" required />
      </>,
    ).toJSON()
    expect(element).toMatchSnapshot()
  })
})
