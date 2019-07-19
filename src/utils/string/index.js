export const cropText = (text = '', max = 80) => {
  if (text.length > max) {
    return `${text.slice(0, max)}...`
  }

  return text
}
