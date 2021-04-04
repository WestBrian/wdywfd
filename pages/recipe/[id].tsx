import { GetServerSideProps } from 'next'
import { FC } from 'react'
import { Recipe } from '../../types'
import { RecipePage } from '../../components/RecipePage'

interface PageProps {
  recipe: Recipe
}

const Page: FC<PageProps> = ({ recipe }) => {
  return <RecipePage recipe={recipe} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isDev = process.env.NODE_ENV === 'development'

  const id = context.params?.id
  const host = context.req.headers.host
  let protocol = isDev ? 'http' : 'https'

  const recipe = await fetch(
    `${protocol}://${host}/api/getRecipe/${id}`
  ).then((res) => res.json())

  return {
    props: {
      recipe,
    },
  }
}

export default Page
