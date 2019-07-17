export const existsOnList = (
  item, property, list = [],
) => list.find(error => error[property] === item[property])
