import { foodToEmoji } from '../foodToEmoji'

describe('foodToEmoji', () => {
  it('finds a food emoji', () => {
    const emoji = foodToEmoji('apple')
    expect(emoji).toBe('🍎')
  })

  it('forces a predefined food emoji', () => {
    const emoji = foodToEmoji('water')
    expect(emoji).toBe('💧')
  })

  it('fills in a non-food emoji', () => {
    const emoji = foodToEmoji('brown sugar')
    expect(emoji).toBe('🤎')
  })

  it('returns an empty string if no emoji is found', () => {
    const emoji = foodToEmoji('lime')
    expect(emoji).toBe('')
  })
})
