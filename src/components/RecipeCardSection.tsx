import {
  SimpleGrid,
  useToast,
  Spinner,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react'
import { type FC, useEffect } from 'react'
import { useGetRandomRecipesQuery } from '../services/spoonacular'
import { RecipeCard } from './RecipeCard'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

export interface RecipeCardSectionProps {
  tag: string
  page: number
}

export const RecipeCardSection: FC<RecipeCardSectionProps> = ({
  tag,
  page,
}) => {
  const { data, isLoading, isError } = useGetRandomRecipesQuery({
    tag,
    page,
  })
  const toastId = 'random-recipe-error-toast'
  const toast = useToast()

  useEffect(() => {
    if (isError && !toast.isActive(toastId)) {
      toast({
        id: toastId,
        title: 'Something went wrong',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }, [isError, toast])

  if (isLoading) {
    return <Spinner color={'blue.500'} />
  }

  if (isError) {
    return (
      <HStack w={'full'} px={6} justify={'center'}>
        <Icon as={ExclamationCircleIcon} color={'red.500'} />
        <Text color={'GrayText'} fontWeight={'semibold'}>
          There was an issue fetching the recipes
        </Text>
      </HStack>
    )
  }

  return (
    <SimpleGrid w={'full'} px={6} columns={[1, 2, 3]} spacing={[6]}>
      {data &&
        data.recipes.map((recipe, index) => (
          <RecipeCard key={recipe.id} recipe={recipe} priority={index === 0} />
        ))}
    </SimpleGrid>
  )
}
