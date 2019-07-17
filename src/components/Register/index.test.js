import React from 'react'
import renderer from 'react-test-renderer'
import Register from '.'

describe('Register Component', () => {
  it('should render register component', () => {
    const element = renderer.create(<Register />).toJSON()
    expect(element).toMatchSnapshot()
  })
})
