import React, { FC } from 'react'
import { NutrientsEntity } from '../../types'

interface NutritionProps {
  data: NutrientsEntity
  color: 'red' | 'green' | 'purple' | 'blue'
}

const Nutrition: FC<NutritionProps> = ({ data, color }) => {
  const { name, amount, unit } = data

  let gradientClasses: string
  let amountBg: string

  switch (color) {
    case 'red':
      gradientClasses = 'from-red-400 to-red-300'
      amountBg = 'bg-red-300'
      break
    case 'green':
      gradientClasses = 'from-green-400 to-green-300'
      amountBg = 'bg-green-300'
      break
    case 'purple':
      gradientClasses = 'from-purple-400 to-purple-300'
      amountBg = 'bg-purple-300'
      break
    case 'blue':
      gradientClasses = 'from-blue-400 to-blue-300'
      amountBg = 'bg-blue-300'
      break
  }

  return (
    <div
      className={`rounded-full p-2 bg-gradient-to-tr ${gradientClasses} text-white flex flex-row items-center`}
      style={{ maxWidth: '250px' }}
    >
      <div
        className={`p-2 rounded-full h-12 w-12 flex items-center justify-center ${amountBg} mr-4`}
      >
        <div>{Math.floor(amount)}</div>
      </div>
      <div>
        <div className="font-bold text-base">{name}</div>
        <div className="text-sm text-white text-opacity-50">{unit}</div>
      </div>
    </div>
  )
}

interface RecipeNutritionsProps {
  nutritions: NutrientsEntity[]
}

export const RecipeNutritions: FC<RecipeNutritionsProps> = ({ nutritions }) => {
  const calories = nutritions.find((n) => n.name === 'Calories')
  const carbs = nutritions.find((n) => n.name === 'Carbohydrates')
  const protein = nutritions.find((n) => n.name === 'Protein')
  const calcium = nutritions.find((n) => n.name === 'Calcium')

  return (
    <div>
      <h2 className="font-bold text-lg text-header mb-4">Nutritions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {calories && <Nutrition data={calories} color={'red'} />}
        {carbs && (
          <Nutrition data={{ ...carbs, name: 'Carbs' }} color={'green'} />
        )}
        {protein && <Nutrition data={protein} color={'purple'} />}
        {calcium && <Nutrition data={calcium} color={'blue'} />}
      </div>
      {nutritions.length === 0 && (
        <div className="text-base text-primary">
          There is no nutrient information.
        </div>
      )}
    </div>
  )
}
