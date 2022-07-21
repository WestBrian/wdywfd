import React, { type FC } from 'react'
import { Container, Heading, VStack } from '@chakra-ui/react'
import { RecipeSearchSection } from '../components/RecipeSearchSection'
import { RecipeCardSection } from '../components/RecipeCardSection'

export const px = [6, 12]

export interface RecipeSearchProps {}

export const RecipeSearch: FC<RecipeSearchProps> = () => {
  return (
    <Container p={0} maxW={'container.lg'}>
      <VStack spacing={0} align={'flex-start'}>
        <Heading size={'lg'} px={px} pt={6}>
          Find Recipes
        </Heading>
        <RecipeSearchSection />
        <RecipeCardSection />
      </VStack>
    </Container>
  )
}
