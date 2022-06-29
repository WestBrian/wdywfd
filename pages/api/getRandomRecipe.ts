import type { NextApiRequest, NextApiResponse } from 'next'
import type { InlineResponse2006 } from '../../spoonacular-sdk'
import { recipeApi } from '../../src/lib/spoonacular'

function getRandomRecipes(tag?: string) {
  let tags = ''

  if (tag && tag !== 'all') {
    tags = tag
  }

  return new Promise<InlineResponse2006>((resolve) => {
    recipeApi.getRandomRecipes(
      {
        limitLicense: true,
        tags,
        _number: 6,
      },
      (error: {}, data: InlineResponse2006) => {
        if (!error) {
          resolve(data)
        }
      }
    )
  })
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<InlineResponse2006>
) => {
  const tag = req.query.tag as string
  const data = await getRandomRecipes(tag)
  res.status(200).json(data)
}

export default handler
