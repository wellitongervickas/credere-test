import { cropText } from './string'

describe('String Utils', () => {
  it('should function to be defined', () => {
    expect(cropText()).toBeDefined()
  })

  it('should crop text without default props', () => {
    const string = cropText()

    expect(string).toBe('')
    expect(string).toHaveLength(0)
  })

  it('should crop text with just text props', () => {
    const text = 'My name is John Cena'
    const string = cropText(text)

    expect(string).toBe(text)
    expect(string).toHaveLength(20)
  })

  it('should crop text with all props but short text', () => {
    const text = 'My name is John Cena'
    const string = cropText(text, 50)

    expect(string).toBe(text)
    expect(string).toHaveLength(20)
    expect(string).not.toHaveLength(23)
  })

  it('should crop text with all props with long text', () => {
    const cropMax = 20
    const string = cropText('My name is John Cena and i will destroy you', cropMax)

    expect(string).toBe('My name is John Cena...')
    expect(string).toHaveLength(cropMax + 3) // with dots
  })
})
