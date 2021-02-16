import React, { FC } from 'react'
import { StepsEntity } from '../../types'

interface RecipeStepsProps {
  steps: StepsEntity[]
}

export const RecipeSteps: FC<RecipeStepsProps> = ({ steps }) => {
  return (
    <div>
      <h2 className="font-bold text-lg text-header mb-4">Steps</h2>
      <ul>
        {steps.map((step) => (
          <li className="text-base text-primary mb-2" key={step.number}>
            {step.step}
          </li>
        ))}
      </ul>
    </div>
  )
}
