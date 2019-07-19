import { findItemFromKey } from '.'

describe('Array Utils', () => {
  it('should function getFieldValue to be defined', () => {
    expect(findItemFromKey).toBeDefined()
  })

  it('should return empty value because dont have fields and fields and field is null', () => {
    const fields = []
    const field = null
    const expected = findItemFromKey(fields, 'key', field)
    expect(expected).toBeUndefined()
  })

  it('should return empty value because cant find a password field in fields', () => {
    const fields = [{ key: 'name', value: 'test' }]
    const field = 'password'
    const expected = findItemFromKey(fields, 'key', field)
    expect(expected).toBeUndefined()
  })

  it('should return a valid value because can find field in fields list', () => {
    const fields = [{ key: 'name', value: 'test' }]
    const field = 'name'
    const expected = findItemFromKey(fields, 'key', field)
    expect(expected).toEqual({ key: 'name', value: 'test' })
  })
})
