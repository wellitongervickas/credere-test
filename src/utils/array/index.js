export const findItemFromKey = (
  list = [], key, identifier,
) => list.find(el => el[key] === identifier)

export const removeFromList = (
  list, property, value,
) => list.filter(item => item[property] !== value)
