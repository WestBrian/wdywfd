import * as unicodeEmojis from 'unicode-emoji'
import pluralize from 'pluralize'

const forceEmoji: { [x: string]: string } = {
  beef: 'cut of meat',
  macaroni: 'spaghetti',
  water: 'droplet',
  seasoning: 'salt',
  parsley: 'herb',
  pumpkin: 'jack-o-lantern',
  mozzarella: 'cheese wedge',
  oregano: 'herb',
  chives: 'herb',
  crabmeat: 'crab',
  lemonade: 'lemon',
  yeast: 'sheaf of rice',
  chard: 'leafy green',
  thyme: 'herb',
  pork: 'cut of meat',
  tortillas: 'flatbread',
  rosemary: 'herb',
  basil: 'herb',
}

const foodEmojis = unicodeEmojis.getEmojis()

function matchKeywords(str: string, emoji: unicodeEmojis.BaseEmoji) {
  return [str, pluralize.singular(str)].some((value) =>
    emoji.keywords.includes(value)
  )
}

function filterEmojis(str: string) {
  return foodEmojis.filter((emoji) => matchKeywords(str, emoji))
}

export function foodToEmoji(food: string) {
  const words = food.split(' ')
  const forced = words.find((word) => !!forceEmoji[word])
  if (forced) {
    return (
      foodEmojis.find((emoji) => emoji.description === forceEmoji[forced])
        ?.emoji || ''
    )
  }
  const emojis = words.reduce<unicodeEmojis.BaseEmoji[]>((prev, cur) => {
    return [...prev, ...filterEmojis(cur)]
  }, [])
  if (emojis.length > 0) {
    const perfectMatch = emojis
      .filter((emoji) => emoji.group === 'food-drink')
      .find((emoji) => emoji.description.includes(food))
    return perfectMatch
      ? perfectMatch.emoji
      : emojis.find((emoji) => emoji.group === 'food-drink')?.emoji ||
          emojis[0].emoji
  }
  return ''
}
