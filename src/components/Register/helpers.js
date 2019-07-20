/* eslint-disable no-param-reassign */
import uuid from 'uuid/v1'
import { getFieldValue } from '../Form/helpers'

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

export const updateMainPhone = (list = [], id) => {
  if (list.length === 1) {
    list[0].main = true
    return list
  }

  return list.filter((item) => {
    if (item.id === id) {
      item.main = true
    } else {
      item.main = false
    }

    return item
  })
}

export const parseFormOutput = fields => ({
  id: uuid(),
  name: getFieldValue(fields, 'name'),
  birthday: getFieldValue(fields, 'birthday'),
  driver_license: getFieldValue(fields, 'driver_license'),
  state: getFieldValue(fields, 'state'),
  city: getFieldValue(fields, 'city'),
  phones: getFieldValue(fields, 'phones'),
  emails: getFieldValue(fields, 'emails'),
  parent: {
    id: uuid(),
    name: getFieldValue(fields, 'parent-name'),
    phone: {
      id: uuid(),
      code: getFieldValue(fields, 'parent-phone-code'),
      number: getFieldValue(fields, 'parent-phone-number'),
    },
  },
})
