import React, { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { Recipe } from '../../types'
import classNames from 'classnames'
import { RecipeSection } from '../RecipeSection'

const toggleValue = 100

interface RecipeSliderProps {
  recipe: Recipe
}

export const RecipeSlider: FC<RecipeSliderProps> = ({ recipe }) => {
  const [open, setOpen] = useState(false)

  const wrapperClasses = classNames({
    'w-full': true,
    '-mt-4': true,
    'z-10': true,
    'bg-white': true,
    'rounded-t-2xl': !open,
    relative: !open,
    fixed: open,
    'inset-0': open,
  })

  const innerClasses = classNames({
    'overflow-y-scroll': open,
    'h-screen': open,
  })

  const barClasses = classNames({
    'bg-gray-300': true,
    'w-1/3': true,
    'h-1': true,
    'mt-4': !open,
    'mt-8': open,
    'mb-4': true,
    'mx-auto': true,
  })

  return (
    <motion.div
      drag={'y'}
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={(_, info) => {
        const offset = info.offset.y
        if (offset < -toggleValue) {
          setOpen(true)
        } else if (offset > toggleValue) {
          setOpen(false)
        }
      }}
      layout
      className={wrapperClasses}
      style={{ minHeight: 1000 }}
    >
      <div className={barClasses} />
      <div className={innerClasses}>
        <RecipeSection recipe={recipe} />
        <div className="h-10" />
      </div>
    </motion.div>
  )
}
