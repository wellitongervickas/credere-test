export const isUnderAge = (date) => {
  const currentYear = new Date().getFullYear()
  const ageYear = new Date(date).getFullYear()

  return currentYear - ageYear < 18
}

export const showCity = (state = '', driveLicense = 0) => {
  const sanitizedState = state.toLowerCase()
  const initialDriveLicense = driveLicense.slice(0, 1)

  if (sanitizedState === 'rn' && initialDriveLicense === '6') {
    return true
  }

  return false
}

export const getFieldState = (fields, field) => {
  const el = fields.find(item => item.key === field)
  return el ? el.value : ''
}
