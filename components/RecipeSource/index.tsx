import { url } from 'inspector'
import React, { FC } from 'react'

interface RecipeSource {
  src: string
  sourceName: string
}

export const RecipeSource: FC<RecipeSource> = ({ src, sourceName }) => {
  const imgUrl = `https://s2.googleusercontent.com/s2/favicons?domain_url=${src}`
  const url = new URL(src)

  return (
    <a href={src} target={'_blank'} rel="noopener">
      <div className="bg-white rounded-full px-4 py-4 shadow-sm flex flex-row justify-between items-center md:w-2/4 md:m-auto">
        <div className="flex flex-row items-center">
          <div className="p-2 rounded-full flex items-center justify-center overflow-hidden mr-4">
            <img className="w-8 h-8" src={imgUrl} alt={sourceName} />
          </div>
          <div>
            <p className="font-bold text-gray-800">{sourceName}</p>
            <p className="text-gray-400 text-xs">{url.host}</p>
          </div>
        </div>
        <div className="font-bold text-gray-800 text-lg">&rarr;</div>
      </div>
    </a>
  )
}
