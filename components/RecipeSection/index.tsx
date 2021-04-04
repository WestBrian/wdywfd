import React, { FC } from 'react'
import { Recipe } from '../../types'
import get from 'lodash/get'
import { RecipeTitle } from '../RecipeTitle'
import { RecipeMeta } from '../RecipeMeta'
import { RecipeIngredients } from '../RecipeIngredients'
import { RecipeSteps } from '../RecipeSteps'

interface RecipeSectionProps {
  recipe: Recipe
}

export const RecipeSection: FC<RecipeSectionProps> = ({ recipe }) => {
  return (
    <>
      <RecipeTitle recipe={recipe} />
      <RecipeMeta recipe={recipe} />
      <RecipeIngredients
        ingredients={get(recipe, 'extendedIngredients', [] as any)}
      />
      <RecipeSteps steps={get(recipe, 'analyzedInstructions[0].steps', [])} />
    </>
  )
}
