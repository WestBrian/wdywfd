import React, { type FC, useState } from 'react'
import { VStack, Flex, SimpleGrid } from '@chakra-ui/react'
import {
  InlineResponse20013Steps,
  InlineResponse2003ExtendedIngredients,
} from '../../spoonacular-sdk'
import { ServingsButton } from './ServingsButton'
import { IngredientDetail } from './IngredientDetail'
import { IngredientsStepsToggle } from './IngredientsStepsToggle'
import get from 'lodash/get'
import { StepDetail } from './StepDetail'
import { motion, Variants } from 'framer-motion'

const animation: Variants = {
  hidden: {},
  shown: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

interface Instruction {
  name: string
  steps: InlineResponse20013Steps[]
}

export interface RecipeDetailsProps {
  ingredients: InlineResponse2003ExtendedIngredients[]
  instructions: Instruction[]
  servings: number
}

export const RecipeDetails: FC<RecipeDetailsProps> = ({
  ingredients,
  instructions,
  servings,
}) => {
  const [adjustedServings, setAdjustedServings] = useState(servings)
  const [tab, setTab] = useState<'ingredients' | 'steps'>('ingredients')

  const steps = get(instructions, '[0].steps', []) as InlineResponse20013Steps[]

  return (
    <VStack w={'full'} spacing={6}>
      <Flex
        w={'full'}
        flexDirection={['column', null, 'row']}
        justify={'space-between'}
        align={['flex-end', null, 'center']}
        gap={[4, null, 'auto']}
      >
        <IngredientsStepsToggle
          numOfIngredients={ingredients.length}
          numOfSteps={steps.length}
          tab={tab}
          setTab={setTab}
        />
        <ServingsButton
          servings={adjustedServings}
          setServings={setAdjustedServings}
        />
      </Flex>
      {tab === 'ingredients' ? (
        <SimpleGrid
          key={tab}
          as={motion.ul}
          w={'full'}
          columns={{ base: 1, lg: 2 }}
          spacing={4}
          variants={animation}
          initial={'hidden'}
          animate={'shown'}
        >
          {ingredients.map((ingredient, i) => (
            <IngredientDetail
              key={`${ingredient.id}-${i}`}
              ingredient={ingredient}
              adjustedServings={adjustedServings}
              servings={servings}
            />
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid
          key={tab}
          as={motion.ul}
          w={'full'}
          columns={1}
          spacing={4}
          variants={animation}
          initial={'hidden'}
          animate={'shown'}
        >
          {steps.map((step) => (
            <StepDetail key={`step-${step.number}`} step={step} />
          ))}
        </SimpleGrid>
      )}
    </VStack>
  )
}
