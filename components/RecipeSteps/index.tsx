import React, { FC } from 'react'
import { StepsEntity } from '../../types'

interface RecipeStepsProps {
  steps: StepsEntity[]
}

export const RecipeSteps: FC<RecipeStepsProps> = ({ steps }) => {
  return (
    <div className="p-8">
      <h2 className="font-semibold text-gray-800 mb-4">Steps</h2>
      <ul>
        {steps.map((step, i) => (
          <li className="text-gray-600 mb-4" key={step.number}>
            <strong>{i + 1}</strong>. {step.step}
          </li>
        ))}
      </ul>
    </div>
  )
}
