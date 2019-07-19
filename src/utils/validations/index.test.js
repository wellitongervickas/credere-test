import { requiredField } from '.'

describe('Validation Utils', () => {
  it('should be validation requiredField is defined', () => {
    const expected = requiredField()
    expect(expected).toBeDefined()
  })

  it('should return a empty error description', () => {
    const expected = requiredField('my value')
    expect(expected).toBe('')
  })

  it('should return a error description', () => {
    const expected = requiredField('')
    expect(expected).toBe('Campo obrigatório')
  })
})
