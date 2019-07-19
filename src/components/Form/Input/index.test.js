import React from 'react'
import renderer from 'react-test-renderer'
import Input from '.'
import * as helpers from './helpers'

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
  it('should function getFieldValue to be defined', () => {
    expect(helpers.getFieldValue()).toBeDefined()
  })

  it('should return empty value because dont have fields and fields and field is null', () => {
    const fields = []
    const field = null
    const expected = helpers.getFieldValue(fields, field)
    expect(expected).toEqual('')
  })

  it('should return empty value because cant find a password field in fields', () => {
    const fields = [{ key: 'name', value: 'test' }]
    const field = 'password'
    const expected = helpers.getFieldValue(fields, field)
    expect(expected).toEqual('')
  })

  it('should return a valid value because can find field in fields list', () => {
    const fields = [{ key: 'name', value: 'test' }]
    const field = 'name'
    const expected = helpers.getFieldValue(fields, field)
    expect(expected).toEqual('test')
  })
})
