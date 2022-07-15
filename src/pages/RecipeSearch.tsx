import React, { type FC } from 'react'
import { Container, Heading, VStack } from '@chakra-ui/react'
import { RecipeSearchSection } from '../components/RecipeSearchSection'
import { RecipeCardSection } from '../components/RecipeCardSection'

export interface RecipeSearchProps {}

export const RecipeSearch: FC<RecipeSearchProps> = () => {
  return (
    <Container p={0} maxW={'container.md'}>
      <VStack spacing={0} align={'flex-start'}>
        <Heading size={'lg'} px={6} pt={6}>
          Find Recipes
        </Heading>
        <RecipeSearchSection />
        <RecipeCardSection />
      </VStack>
    </Container>
  )
}
