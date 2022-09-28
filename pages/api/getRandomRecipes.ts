import type { NextApiRequest, NextApiResponse } from 'next'
import type { GetRandomRecipes200Response } from 'spoonacular-js-sdk'
import { recipeApi } from '../../src/lib/spoonacular'

function getRandomRecipes(tag?: string) {
  let tags = ''

  if (tag && tag !== 'all') {
    tags = tag
  }

  return new Promise<GetRandomRecipes200Response>((resolve, reject) => {
    recipeApi.getRandomRecipes(
      {
        limitLicense: true,
        tags,
        number: 8,
      },
      (error: Error, data: GetRandomRecipes200Response) => {
        if (error) {
          reject(error)
        }

        resolve(data)
      }
    )
  })
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GetRandomRecipes200Response | {}>
) => {
  const tag = req.query.tag as string
  try {
    const data = await getRandomRecipes(tag)
    res.status(200).json(data)
  } catch (err: any) {
    const isOverLimit = err.message === 'Payment Required'
    res.status(500).json(isOverLimit ? { isOverLimit } : {})
  }
}

export default handler
