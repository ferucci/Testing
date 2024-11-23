

export const reduceStringToNumber = (str) => {
  return parseFloat(str.replace(/\s/g, '').replace('₽', ''))
}