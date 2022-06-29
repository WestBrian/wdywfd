import { type FC } from 'react'
import type { InlineResponse2006Recipes } from '../../spoonacular-sdk'
import Image from 'next/image'
import { Box, Text, VStack } from '@chakra-ui/react'

export interface RecipeCardProps {
  recipe: InlineResponse2006Recipes
  priority?: boolean
}

export const RecipeCard: FC<RecipeCardProps> = ({
  recipe,
  priority = false,
}) => {
  return (
    <Box
      borderRadius={'lg'}
      overflow={'hidden'}
      marginX={'auto'}
      w={['full']}
      h={[350, null, 275]}
      position={'relative'}
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
          <Text color={'white'}>
            {recipe.extendedIngredients.length} Ingredients |{' '}
            {recipe.readyInMinutes} min
          </Text>
        </VStack>
      </Box>
    </Box>
  )
}
