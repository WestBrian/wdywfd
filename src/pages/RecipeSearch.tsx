import React, { type FC } from 'react'
import { Container, Heading, VStack } from '@chakra-ui/react'
import { RecipeSearchSection } from '../components/RecipeSearchSection'
import { RecipeCardSection } from '../components/RecipeCardSection'
import { motion } from 'framer-motion'

export const px = [6, 12]

export interface RecipeSearchProps {}

export const RecipeSearch: FC<RecipeSearchProps> = () => {
  return (
    <Container p={0} maxW={'full'}>
      <motion.div
        initial={{ x: '-25px', opacity: 0 }}
        animate={{ x: '0', opacity: 1 }}
      >
        <VStack spacing={0} align={'flex-start'}>
          <Heading size={'lg'} px={px} pt={6}>
            Find Recipes
          </Heading>
          <RecipeSearchSection />
          <RecipeCardSection />
        </VStack>
      </motion.div>
    </Container>
  )
}
