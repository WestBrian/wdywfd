import {
  SimpleGrid,
  useToast,
  Spinner,
  HStack,
  Icon,
  Text,
  VStack,
  Button,
} from '@chakra-ui/react'
import { type FC, useEffect } from 'react'
import { RecipeCard } from './RecipeCard'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { fetchRandomRecipes } from '../reducers/recipe-search'

export interface RecipeCardSectionProps {}

export const RecipeCardSection: FC<RecipeCardSectionProps> = () => {
  const dispatch = useDispatch<AppDispatch>()
  const status = useSelector((state: RootState) => state.recipeSearch.loading)
  const selectedTag = useSelector(
    (state: RootState) => state.recipeSearch.selectedTag
  )
  const data = useSelector(
    (state: RootState) => state.recipeSearch.randomRecipes[selectedTag]
  )

  const isLoading = status === 'pending'
  const isError = status === 'failed'
  const toastId = 'random-recipe-error-toast'
  const toast = useToast()

  useEffect(() => {
    if (data.length > 0) {
      return
    }

    dispatch(fetchRandomRecipes(selectedTag))
  }, [dispatch, selectedTag, data.length])

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

  if (isLoading && data.length === 0) {
    return (
      <HStack w={'full'} justify={'center'}>
        <Spinner color={'blue.500'} />
      </HStack>
    )
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
    <VStack w={'full'}>
      <SimpleGrid w={'full'} px={6} columns={[1, 2, 3]} spacing={[6]}>
        {data &&
          data.map((recipe, index) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              priority={index === 0}
            />
          ))}
      </SimpleGrid>
      {data.length > 0 && (
        <HStack py={6} w={'full'}>
          <Button
            mx={'auto'}
            colorScheme={'green'}
            size={'sm'}
            isLoading={isLoading}
            onClick={() => dispatch(fetchRandomRecipes(selectedTag))}
          >
            Load more
          </Button>
        </HStack>
      )}
    </VStack>
  )
}
