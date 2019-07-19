import * as helpers from './helpers'

describe('Register Helpers', () => {
  it('should function getFieldError to be defined', () => {
    expect(helpers.getFieldError).toBeDefined()
  })

  it('should return empty value because dont have fields and field is null', () => {
    const fields = []
    const field = null
    const expected = helpers.getFieldError(fields, field)
    expect(expected).toEqual('')
  })

  it('should return empty value because cant find a password field in fields', () => {
    const fields = [{ key: 'name', value: 'test', error: 'Campo obrigatório' }]
    const field = 'password'
    const expected = helpers.getFieldError(fields, field)
    expect(expected).toEqual('')
  })

  it('should return a valid value because can find field in fields list', () => {
    const fields = [{ key: 'name', value: 'test', error: 'Campo obrigatório' }]
    const field = 'name'
    const expected = helpers.getFieldError(fields, field)
    expect(expected).toEqual('Campo obrigatório')
  })

  it('should function getFieldValue to be defined', () => {
    expect(helpers.getFieldValue()).toBeDefined()
  })

  it('should return empty value because dont have fields and field is null', () => {
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
