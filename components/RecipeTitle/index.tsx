import React, { FC } from 'react'
import { Recipe } from '../../types'
import { ExternalLinkIcon } from '@heroicons/react/outline'

interface RecipeTitleProps {
  recipe: Recipe
}

export const RecipeTitle: FC<RecipeTitleProps> = ({ recipe }) => {
  return (
    <div className="flex flex-row items-center justify-between p-8 pt-0">
      <h1 className="w-2/3 text-gray-800 text-lg">{recipe.title}</h1>
      <div className="w-8 h-8 text-gray-400">
        <a href={recipe.sourceUrl}>
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  )
}
