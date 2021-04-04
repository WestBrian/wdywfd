import React, { FC, ReactNode } from 'react'
import { Recipe } from '../../types'
import { ClockIcon, UserIcon, StarIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

interface MetaBlockProps {
  icon: JSX.Element
  color: string
  children: ReactNode
}

const MetaBlock: FC<MetaBlockProps> = ({ icon, color, children }) => {
  const iconClasses = {
    'w-6': true,
    'h-6': true,
    'mr-2': true,
    [color]: true,
  }

  return (
    <div className="flex flex-row items-center">
      <div className={classNames(iconClasses)}>{icon}</div>
      <span className="text-gray-600">{children}</span>
    </div>
  )
}

interface RecipeMetaProps {
  recipe: Recipe
}

export const RecipeMeta: FC<RecipeMetaProps> = ({ recipe }) => {
  return (
    <div className="bg-gray-100 p-4 grid grid-cols-3 gap-2 place-items-center">
      <MetaBlock icon={<ClockIcon />} color={'text-blue-300'}>
        {recipe.readyInMinutes} min
      </MetaBlock>
      <MetaBlock icon={<UserIcon />} color={'text-green-300'}>
        {recipe.servings}
      </MetaBlock>
      <MetaBlock icon={<StarIcon />} color={'text-yellow-300'}>
        {recipe.spoonacularScore} / 100
      </MetaBlock>
    </div>
  )
}
