import React, { type FC, useState } from 'react'
import { VStack, Text, Flex, SimpleGrid } from '@chakra-ui/react'
import { InlineResponse2003ExtendedIngredients } from '../../spoonacular-sdk'
import { ServingsButton } from './ServingsButton'
import { IngredientDetail } from './IngredientDetail'

export interface RecipeIngredientsProps {
  ingredients: InlineResponse2003ExtendedIngredients[]
  servings: number
}

export const RecipeIngredients: FC<RecipeIngredientsProps> = ({
  ingredients,
  servings,
}) => {
  const [adjustedServings, setAdjustedServings] = useState(servings)

  return (
    <VStack w={'full'} spacing={6}>
      <Flex w={'full'} justify={'space-between'} align={'center'}>
        <Text fontSize={'lg'} fontWeight={'semibold'}>
          Ingredients ({ingredients.length})
        </Text>
        <ServingsButton
          servings={adjustedServings}
          setServings={setAdjustedServings}
        />
      </Flex>
      <SimpleGrid w={'full'} columns={{ base: 1, lg: 2 }} spacing={4}>
        {ingredients.map((ingredient, i) => (
          <IngredientDetail
            key={`${ingredient.id}-${i}`}
            ingredient={ingredient}
            adjustedServings={adjustedServings}
            servings={servings}
          />
        ))}
      </SimpleGrid>
    </VStack>
  )
}
