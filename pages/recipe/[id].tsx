import { GetServerSideProps } from 'next'
import { RecipePicture } from '../../components/RecipePicture'
import { RecipeSource } from '../../components/RecipeSource'
import { RecipeDesc } from '../../components/RecipeDesc'
import { RecipeNutritions } from '../../components/RecipeNutritions'
import { RecipeIngredients } from '../../components/RecipeIngredients'
import { RecipeSteps } from '../../components/RecipeSteps'
import { FC } from 'react'
import { Recipe } from '../../types'
import { recipesIdData } from '../../mock/recipes-id.data'

interface RecipeProps {
  recipe: Recipe
}

const RecipePage: FC<RecipeProps> = ({ recipe }) => {
  return (
    <div className="max-w-screen-lg m-auto">
      <div className="mb-8">
        <RecipePicture src={recipe.image} alt={recipe.title} />
      </div>
      <div className="px-6 pb-8">
        <div className="mb-8">
          <RecipeSource src={recipe.sourceUrl} sourceName={recipe.sourceName} />
        </div>
        <div className="mb-8">
          <RecipeDesc
            title={recipe.title}
            cuisines={recipe.cuisines!}
            desc={recipe.summary}
          />
        </div>
        <div className="mb-8">
          <RecipeNutritions nutritions={recipe.nutrition.nutrients!} />
        </div>
        <div className="mb-8">
          <RecipeIngredients ingredients={recipe.extendedIngredients!} />
        </div>
        <RecipeSteps steps={recipe.analyzedInstructions![0].steps!} />
      </div>
    </div>
  )
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

export default RecipePage
