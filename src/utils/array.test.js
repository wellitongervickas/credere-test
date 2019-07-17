import { existsOnList } from './array'

describe('Array Utils', () => {
  it('should function existsOnList to be defined', () => {
    expect(existsOnList()).not.toBeDefined()
  })

  it('should dont get a valid value from list', () => {
    const list = [{ key: 'A', value: 1 }]
    const item = { key: 'B', value: 2 }
    expect(existsOnList(item, 'key', list)).not.toBeDefined()
  })

  it('should get a valid value from list', () => {
    const list = [{ key: 'A', value: 1 }]
    const item = { key: 'A', value: 1 }
    expect(existsOnList(item, 'key', list)).toBeDefined()
  })
})
