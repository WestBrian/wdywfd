import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Recipe, RecipeProps } from '../../src/pages/Recipe'
import { recipeApi } from '../../src/lib/spoonacular'
import type { InlineResponse2004 } from '../../spoonacular-sdk'

function getRecipeInformation(id: string): Promise<InlineResponse2004> {
  return new Promise((resolve, reject) => {
    recipeApi.getRecipeInformation(
      Number(id),
      {
        includeNutrition: false,
      },
      (error: Error, data: InlineResponse2004) => {
        if (error) {
          reject(error)
        }

        resolve(JSON.parse(JSON.stringify(data)))
      }
    )
  })
}

const RecipePage: NextPage<RecipeProps> = ({ recipe }) => {
  return (
    <div>
      <Head>
        <title>Whats For Dinner</title>
      </Head>
      <Recipe recipe={recipe} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<
  RecipeProps,
  { id: string }
> = async (context) => {
  const id = context.params?.id as string
  const recipe = await getRecipeInformation(id)

  return {
    props: {
      recipe,
    },
    // Every 15 days
    revalidate: 60 * 1440 * 15,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default RecipePage
