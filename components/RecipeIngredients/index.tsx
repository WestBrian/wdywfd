import React, { FC } from 'react'
import { ExtendedIngredientsEntity } from '../../types'

interface RecipeIngredientsProps {
  ingredients: ExtendedIngredientsEntity[]
}

export const RecipeIngredients: FC<RecipeIngredientsProps> = ({
  ingredients,
}) => {
  return (
    <div>
      <h2 className="font-bold text-lg text-header mb-4">Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li
            className="text-base text-primary mb-2 flex flex-row"
            key={ingredient.original}
          >
            <span className="mr-2">•</span>
            <span>{ingredient.original}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
