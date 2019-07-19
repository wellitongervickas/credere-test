export const setFontSizing = (font = 12) => ({
  'font-size': `${font}px`,
  'line-height': `${font + 10}px`,
})

export const isEmphasys = (emphasys = false) => (emphasys ? 'font-weight: 800' : null)
