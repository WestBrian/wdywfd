import React, { FC } from 'react'
import { Recipe } from '../../types'
import { RecipePicture } from '../RecipePicture'
import { RecipeSlider } from '../RecipeSlider'
import { RecipeSection } from '../RecipeSection'

interface RecipePageProps {
  recipe: Recipe
}

export const RecipePage: FC<RecipePageProps> = ({ recipe }) => {
  return (
    <>
      <div className="flex flex-col h-screen md:h-full relative overflow-hidden md:hidden">
        <RecipePicture src={recipe.image} alt={recipe.title} />
        <RecipeSlider recipe={recipe} />
      </div>
      <div className="hidden md:block pt-8 max-w-screen-lg mx-auto">
        <RecipePicture src={recipe.image} alt={recipe.title} />
        <RecipeSection recipe={recipe} />
      </div>
    </>
  )
}
