import { setFontSizing, isEmphasys } from './font'

describe('Font Utils', () => {
  it('should function to be defined', () => {
    expect(setFontSizing()).toBeDefined()
  })

  it('should set font sizing and line height without props', () => {
    const font = setFontSizing()
    expect(font).toMatchObject({ 'font-size': '12px', 'line-height': '22px' })
  })

  it('should set font sizing and line height with props', () => {
    const font = setFontSizing(12)
    expect(font).toMatchObject({ 'font-size': '12px', 'line-height': '22px' })
  })

  it('should verify is emphasys is defined', () => {
    expect(isEmphasys()).toBeDefined()
  })

  it('should verify is emphasys', () => {
    expect(isEmphasys(true)).toBe('font-weight: 800')
  })

  it('should verify isnt emphasys', () => {
    expect(isEmphasys(false)).toBeNull()
  })
})
