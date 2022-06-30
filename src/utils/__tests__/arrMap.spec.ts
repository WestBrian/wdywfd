import { arrMap } from '../arrMap'

describe('arrMap', () => {
  it('creates an array of a certain size and fills with the map function', () => {
    const result = arrMap(5, () => 'test')
    expect(result).toHaveLength(5)
    expect(result).toEqual(['test', 'test', 'test', 'test', 'test'])
  })
})
