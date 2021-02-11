import React, { FC } from 'react'

interface RecipeDescProps {
  title: string
  cuisines?: string[]
  desc: string
}

export const RecipeDesc: FC<RecipeDescProps> = ({ title, cuisines, desc }) => {
  const meta = cuisines ? cuisines.join(' | ') : '—'

  return (
    <div>
      <h1 className="font-bold text-xl text-gray-800 mb-1">{title}</h1>
      <p className="text-base text-gray-400 mb-4">{meta}</p>
      <p className="text-base text-gray-600 h-36 overflow-x-hidden overflow-y-scroll">
        {desc}
      </p>
    </div>
  )
}
