export const findItemFromKey = (
  list = [], key, identifier,
) => list.find(el => el[key] === identifier)
