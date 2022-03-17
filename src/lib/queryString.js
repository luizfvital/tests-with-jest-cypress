const queryString = (obj) => 
  Object
    .entries(obj)
    .reduce((acc, [key, value], idx) => {
      if(typeof value !== 'object' || value instanceof Array) {
        return idx === 0 ? `${key}=${value}` : `${acc}&${key}=${value}`
      } else {
        throw new Error('Object cannot be passed as value')
      }
    }, '')

const parse = (string) => string


module.exports = {
  queryString,
  parse
}