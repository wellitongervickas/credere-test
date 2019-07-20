import { findItemFromKey, removeFromList } from '.'

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

  it('should function removeFromList to be defined', () => {
    expect(removeFromList).toBeDefined()
  })

  it('should return a list with initial value', () => {
    const list = []
    const expected = removeFromList(list, 'id', 0)
    expect(expected).toEqual([])
  })

  it('should return a original list values', () => {
    const list = [{ id: 1 }]
    const expected = removeFromList(list, 'id', 0)
    expect(expected).toEqual(list)
  })

  it('should remove item from list with id passed in props', () => {
    const list = [{ id: 0 }, { id: 1 }]
    const expected = removeFromList(list, 'id', 0)
    expect(expected).not.toEqual(list)
    expect(expected).toEqual([{ id: 1 }])
  })
})
