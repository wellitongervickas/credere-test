import { findItemFromKey } from '../../utils/array'

export const getFieldError = (fields = [], field) => {
  const el = findItemFromKey(fields, 'key', field)
  return el ? el.error : ''
}

export const getFieldValue = (fields = [], field) => {
  const el = findItemFromKey(fields, 'key', field)
  return el ? el.value : ''
}
