export const validator = (fn, el) => {
  const validation = fn(el.value)
  el.setCustomValidity(validation)

  if (!el.checkValidity()) {
    el.classList.add('border-danger')
  } else {
    el.classList.remove('border-danger')
  }

  return el
}

export const getFieldError = (fields = [], field) => {
  const fieldEl = fields.find(el => el.key === field)
  return fieldEl ? fieldEl.error : null
}

export const maxToday = () => new Date().toISOString().split('T')[0]
