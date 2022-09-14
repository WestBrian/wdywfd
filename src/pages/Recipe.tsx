import React, { type FC } from 'react'
import type { GetRecipeInformation200Response } from 'spoonacular-js-sdk'
import {
  Container,
  Box,
  Heading,
  VStack,
  IconButton,
  Flex,
  Text,
  Icon,
  HStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ArrowLeftIcon, ClockIcon } from '@heroicons/react/24/solid'
import { RecipeDetails } from '../components/RecipeDetails'
import { RecipeBadges } from '../components/RecipeBadges'
import { RecipeSummary } from '../components/RecipeSummary'
import { RecipeMenu } from '../components/RecipeMenu'
import { motion } from 'framer-motion'

export interface RecipeProps {
  recipe: GetRecipeInformation200Response
}

export const Recipe: FC<RecipeProps> = ({ recipe }) => {
  const router = useRouter()

  return (
    <Container px={[6, 12]} py={6} maxW={'container.lg'}>
      <motion.div
        initial={{ x: '25px', opacity: 0 }}
        animate={{ x: '0', opacity: 1 }}
      >
        <VStack w={'full'} spacing={6}>
          <Flex w={'full'} justify={'space-between'} align={'center'} gap={6}>
            <IconButton
              aria-label={'back'}
              icon={<ArrowLeftIcon width={20} />}
              onClick={() => router.back()}
            />
            <Heading fontSize={'lg'}>{recipe.title}</Heading>
            <RecipeMenu recipe={recipe} />
          </Flex>
          <Box
            w={'full'}
            h={[200, 275, 350]}
            borderRadius={'lg'}
            overflow={'hidden'}
            position={'relative'}
          >
            {recipe.image ? (
              <Image
                src={recipe.image}
                layout={'fill'}
                objectFit={'cover'}
                alt={recipe.title}
                priority
              />
            ) : (
              <Box
                w={'full'}
                height={'full'}
                bg={'gray.200'}
                data-testid={'img-fallback'}
              />
            )}
            <Box
              position={'absolute'}
              inset={0}
              bgGradient={'linear(to-t, blackAlpha.800, transparent)'}
              display={'flex'}
              justifyContent={'flex-end'}
              alignItems={'flex-end'}
              p={4}
            >
              <VStack w={'full'} align={'flex-end'}>
                <HStack>
                  <Icon color={'white'} as={ClockIcon} />
                  <Text fontSize={'sm'} fontWeight={'semibold'} color={'white'}>
                    {recipe.readyInMinutes} minutes
                  </Text>
                </HStack>
                <RecipeBadges
                  badges={[
                    ...recipe.dishTypes,
                    recipe.vegetarian ? 'vegetarian' : '',
                    recipe.vegan ? 'vegan' : '',
                    recipe.veryPopular ? 'very popular' : '',
                  ]}
                />
              </VStack>
            </Box>
          </Box>
          <RecipeSummary summary={recipe.summary} />
          <RecipeDetails
            ingredients={recipe.extendedIngredients}
            instructions={recipe.analyzedInstructions}
            servings={recipe.servings}
          />
        </VStack>
      </motion.div>
    </Container>
  )
}
