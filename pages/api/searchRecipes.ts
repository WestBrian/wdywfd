import type { NextApiRequest, NextApiResponse } from 'next'
import type { SearchRecipes200Response } from 'spoonacular-js-sdk'
import { recipeApi, type SearchOptions } from '../../src/lib/spoonacular'

function searchRecipes(opts: SearchOptions) {
  return new Promise<SearchRecipes200Response>((resolve, reject) => {
    recipeApi.searchRecipes(
      opts as any,
      (error: Error, data: SearchRecipes200Response) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      }
    )
  })
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query.query as string
  const cuisine = req.query.cuisine as string
  const diet = req.query.diet as string
  const type = req.query.type as string
  const intolerances = req.query.intolerances as string
  const maxReadyTime = req.query.maxReadyTime as string
  const offset = req.query.offset as string

  const data = await searchRecipes({
    query,
    cuisine,
    diet,
    type,
    intolerances,
    ...(maxReadyTime && { maxReadyTime: Number(maxReadyTime) }),
    limitLicense: false,
    offset: offset ? Number(offset) : 0,
    number: 8,
  })
  res.status(200).json(data)
}

export default handler
