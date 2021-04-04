import React, { FC } from 'react'
import { ExtendedIngredientsEntity } from '../../types'
import Image from 'next/image'

interface RecipeIngredientsProps {
  ingredients: ExtendedIngredientsEntity[]
}

export const RecipeIngredients: FC<RecipeIngredientsProps> = ({
  ingredients,
}) => {
  function roundToTwo(num: number) {
    // @ts-ignore
    return +(Math.round(num + 'e+2') + 'e-2')
  }

  return (
    <div className="p-8">
      <h2 className="font-semibold text-gray-800 mb-4">Ingredients</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {ingredients.map((ingredient, i) => (
          <div key={`${ingredient.id}-${i}`}>
            <div className="rounded mb-2 bg-gray-100 p-4">
              <div className="w-20 h-20 mx-auto">
                <Image
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                  width={80}
                  height={80}
                  className="mix-blend-multiply"
                />
              </div>
            </div>
            <div className="flex flex-row items-center">
              <span className="mr-1 whitespace-nowrap text-gray-600">
                {roundToTwo(ingredient.amount)} {ingredient.unit}
              </span>
              <span className="text-sm whitespace-nowrap text-gray-400">
                {ingredient.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
