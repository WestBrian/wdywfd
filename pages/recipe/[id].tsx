import { useRouter } from 'next/router'
import { recipesIdData } from '../../mock/recipes-id.data'
import { RecipePicture } from '../../components/RecipePicture'
import { RecipeSource } from '../../components/RecipeSource'
import { RecipeDesc } from '../../components/RecipeDesc'
import { RecipeNutritions } from '../../components/RecipeNutritions'
import { RecipeIngredients } from '../../components/RecipeIngredients'
import { RecipeSteps } from '../../components/RecipeSteps'

const Recipe = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="max-w-screen-lg m-auto">
      <div className="mb-8">
        <RecipePicture src={recipesIdData.image} alt={recipesIdData.title} />
      </div>
      <div className="px-6 pb-8">
        <div className="mb-8">
          <RecipeSource
            src={recipesIdData.sourceUrl}
            sourceName={recipesIdData.sourceName}
          />
        </div>
        <div className="mb-8">
          <RecipeDesc
            title={recipesIdData.title}
            cuisines={recipesIdData.cuisines!}
            desc={recipesIdData.summary}
          />
        </div>
        <div className="mb-8">
          <RecipeNutritions nutritions={recipesIdData.nutrition.nutrients!} />
        </div>
        <div className="mb-8">
          <RecipeIngredients ingredients={recipesIdData.extendedIngredients!} />
        </div>
        <RecipeSteps steps={recipesIdData.analyzedInstructions![0].steps!} />
      </div>
    </div>
  )
}

export default Recipe
