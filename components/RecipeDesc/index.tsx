import React, { FC } from 'react'

interface RecipeDescProps {
  title: string
  cuisines: string[]
  desc: string
}

export const RecipeDesc: FC<RecipeDescProps> = ({ title, cuisines, desc }) => {
  const meta = cuisines ? cuisines.join(' | ') : ''

  function stripHTML(htmlStr: string) {
    return htmlStr.replace(/<[^>]*>/g, '')
  }

  return (
    <div>
      <h1 className="font-bold text-xl text-header mb-1">{title}</h1>
      <p className="text-base text-primary text-opacity-80 mb-4">{meta}</p>
      <p className="text-base text-primary h-36 overflow-x-hidden overflow-y-scroll">
        {stripHTML(desc)}
      </p>
    </div>
  )
}
