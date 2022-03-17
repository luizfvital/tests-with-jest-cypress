const {queryString, parse} = require('./querystring')

describe('Object to query string', () => {
  it('it should create a valid query string when a object is passed', () => {
    const object = {
      name: 'Luiz',
      profession: 'Developer'
    }

    expect(queryString(object)).toBe(
      'name=Luiz&profession=Developer'
    )
  })

  it('it should create a valid query string even if there is an array as value', () => {
    const object = {
      name: 'Luiz',
      profession: ['Developer','Designer']
    }

    expect(queryString(object)).toBe(
      'name=Luiz&profession=Developer,Designer'
    )
  })

  it('it should throw an error when an object is passed as value', () => {
    const object = {
      name: 'Luiz',
      profession: {
        main: 'Developer',
        secondary: 'Designer'
      }
    }

    expect(() => {
      queryString(object)
    }).toThrowError()
  })
})

describe('Query string to object', () => {
  it('should convert string to object', () => {
    const queryString = 'name=Luiz&profession=Developer'

    expect(parse(queryString)).toEqual({
      name: 'Luiz',
      profession: 'Developer'
    })
  })

})