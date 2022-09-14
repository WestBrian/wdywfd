import React, { type FC } from 'react'
import type {
  GetRandomRecipes200ResponseRecipesInner,
  SearchRecipes200ResponseResultsInner,
} from 'spoonacular-js-sdk'
import Image from 'next/image'
import { Box, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import get from 'lodash/get'

export interface RecipeCardProps {
  recipe:
    | GetRandomRecipes200ResponseRecipesInner
    | SearchRecipes200ResponseResultsInner
  priority?: boolean
}

export const RecipeCard: FC<RecipeCardProps> = ({
  recipe,
  priority = false,
}) => {
  const extendedIngredients = get(recipe, 'extendedIngredients')
  const readyInMinutes = get(recipe, 'readyInMinutes')

  return (
    <Link href={`/recipe/${recipe.id}`} prefetch={false} passHref>
      <Box
        as={'a'}
        borderRadius={'lg'}
        overflow={'hidden'}
        marginX={'auto'}
        w={['full']}
        h={275}
        position={'relative'}
        cursor={'pointer'}
      >
        {recipe.image ? (
          <Image
            src={recipe.image}
            layout={'fill'}
            objectFit={'cover'}
            alt={recipe.title}
            priority={priority}
          />
        ) : (
          <Box w={'full'} height={'full'} bg={'gray.200'} />
        )}
        <Box position={'absolute'} inset={0} bg={'blackAlpha.500'} />
        <Box position={'absolute'} bottom={0} p={4}>
          <VStack align={'flex-start'}>
            <Text
              fontSize={'xl'}
              fontWeight={'bold'}
              color={'white'}
              data-testid={'card-title'}
            >
              {recipe.title}
            </Text>
            {extendedIngredients && readyInMinutes && (
              <Text color={'white'}>
                {extendedIngredients.length} Ingredients | {readyInMinutes} min
              </Text>
            )}
          </VStack>
        </Box>
      </Box>
    </Link>
  )
}
