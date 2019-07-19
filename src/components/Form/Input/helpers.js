import { findItemFromKey } from '../../../utils/array'

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
  const el = findItemFromKey(fields, 'key', field)
  return el ? el.error : null
}

export const getFieldValue = (fields = [], field) => {
  const el = findItemFromKey(fields, 'key', field)
  return el ? el.value : ''
}

export const maxToday = () => new Date().toISOString().split('T')[0]
