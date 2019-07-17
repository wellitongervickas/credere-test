import { requiredFiled } from './validations'

describe('Register Component', () => {
  it('should be validation requiredField is defined', () => {
    const expected = requiredFiled()
    expect(expected).toBeDefined()
  })

  it('should return a empty error description', () => {
    const expected = requiredFiled('my value')
    expect(expected).toBe('')
  })

  it('should return a error description', () => {
    const expected = requiredFiled('')
    expect(expected).toBe('Campo obrigatório')
  })
})
