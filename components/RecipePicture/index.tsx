import React, { FC } from 'react'

interface RecipePictureProps {
  src: string
  alt: string
}

export const RecipePicture: FC<RecipePictureProps> = ({ src, alt }) => {
  return (
    <div className="text-center md:px-6 md:pt-8">
      <div className="relative inline-block w-full md:w-2/4 m-auto rounded-none md:rounded-2xl overflow-hidden">
        <img src={src} alt={alt} className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30"></div>
      </div>
    </div>
  )
}
