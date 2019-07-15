import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

describe('App', () => {
  it('should render App', () => {
    const element = renderer.create(<App />).toJSON()
    expect(element).toMatchSnapshot()
  })
})
