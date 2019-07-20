import React from 'react'
import renderer from 'react-test-renderer'
import Input from '.'
import { maxToday } from './helpers'

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

describe('Input Helpers', () => {
  it('should be today', () => {
    const today = new Date().toISOString().split('T')[0]
    expect(maxToday()).toBe(today)
  })

  it('should not be tomorrow', () => {
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow = tomorrow.toISOString().split('T')[0]

    expect(maxToday()).not.toBe(tomorrow)
  })
})
