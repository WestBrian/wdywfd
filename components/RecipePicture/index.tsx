import React, { FC } from 'react'
import Image from 'next/image'

interface RecipePictureProps {
  src: string
  alt: string
}

export const RecipePicture: FC<RecipePictureProps> = ({ src, alt }) => {
  return (
    <div className="md:mb-8">
      <div className="relative w-full h-80 md:rounded md:overflow-hidden">
        <Image src={src} alt={alt} layout={'fill'} className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30"></div>
      </div>
    </div>
  )
}
