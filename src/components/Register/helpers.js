export const isUnderAge = (date) => {
  if (date) {
    const currentYear = new Date().getFullYear()
    const ageYear = new Date(date).getFullYear()

    return currentYear - ageYear < 18
  }

  return true
}

export const showCity = (state, driveLicense) => {
  if (state && driveLicense >= 0) {
    const sanitizedState = state.toLowerCase()
    const initialDriveLicense = driveLicense.slice(0, 1)

    if (sanitizedState === 'rn' && initialDriveLicense === '6') {
      return true
    }
  }

  return false
}
