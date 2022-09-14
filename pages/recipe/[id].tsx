import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Recipe, RecipeProps } from '../../src/pages/Recipe'
import { recipeApi } from '../../src/lib/spoonacular'
import type { GetRecipeInformation200Response } from 'spoonacular-js-sdk'
import { Container, VStack, Skeleton } from '@chakra-ui/react'
import { useRouter } from 'next/router'

function getRecipeInformation(
  id: string
): Promise<GetRecipeInformation200Response> {
  return new Promise((resolve, reject) => {
    recipeApi.getRecipeInformation(
      Number(id),
      {
        includeNutrition: false,
      },
      (error: Error, data: GetRecipeInformation200Response) => {
        if (error) {
          reject(error)
        }

        resolve(JSON.parse(JSON.stringify(data)))
      }
    )
  })
}

const RecipePage: NextPage<RecipeProps> = ({ recipe }) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Container px={[6, 12]} py={6} maxW={'container.lg'}>
        <VStack w={'full'} spacing={6}>
          <Skeleton w={'full'} h={'40px'} />
          <Skeleton w={'full'} h={[200, 275, 350]} borderRadius={'lg'} />
          <Skeleton w={'full'} h={'72px'} />
        </VStack>
      </Container>
    )
  }

  return <Recipe recipe={recipe} />
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
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export default RecipePage
