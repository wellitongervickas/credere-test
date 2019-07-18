export const existsOnList = (
  item, property, list = [],
) => list.find(el => el[property] === item[property])
