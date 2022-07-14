import { type FC } from 'react'
import type { InlineResponse2004 } from '../../spoonacular-sdk'
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
import { DotsHorizontalIcon, ArrowLeftIcon } from '@heroicons/react/solid'
import { RecipeIngredients } from '../components/RecipeIngredients'
import { ClockIcon } from '@heroicons/react/solid'
import { RecipeBadges } from '../components/RecipeBadges'

export interface RecipeProps {
  recipe: InlineResponse2004
}

export const Recipe: FC<RecipeProps> = ({ recipe }) => {
  const router = useRouter()

  return (
    <Container p={6} maxW={'container.md'}>
      <VStack w={'full'} spacing={6}>
        <Flex w={'full'} justify={'space-between'} align={'center'}>
          <IconButton
            variant={'link'}
            justifyContent={'flex-start'}
            aria-label={'back'}
            icon={<ArrowLeftIcon width={20} />}
            onClick={() => router.back()}
          />
          <Heading fontSize={'lg'}>{recipe.title}</Heading>
          <IconButton
            variant={'link'}
            justifyContent={'flex-end'}
            aria-label={'options'}
            icon={<DotsHorizontalIcon width={20} />}
          />
        </Flex>
        <Box
          w={'full'}
          h={[200, 275]}
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
        {/* <Text
          fontSize={'md'}
          fontWeight={'semibold'}
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        /> */}
        <RecipeIngredients
          ingredients={recipe.extendedIngredients}
          servings={recipe.servings}
        />
      </VStack>
    </Container>
  )
}
