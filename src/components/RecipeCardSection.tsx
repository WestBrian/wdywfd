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
import React, { type FC, useEffect } from 'react'
import { RecipeCard } from './RecipeCard'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { px } from '../pages/RecipeSearch'
import { useInfiniteQuery, type InfiniteData } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import { useDebounce } from '../hooks/useDebounce'
import { getRandomRecipes, searchRecipes } from '../utils/api'
import {
  tagAtom,
  queryAtom,
  cuisineAtom,
  dietAtom,
  intoleranceAtom,
  maxReadyTimeAtom,
} from '../store'
import type {
  SearchRecipes200ResponseResultsInner,
  GetRandomRecipes200ResponseRecipesInner,
} from 'spoonacular-js-sdk'
import get from 'lodash/get'

export interface RecipeCardSectionProps {}

export const RecipeCardSection: FC<RecipeCardSectionProps> = () => {
  const [query] = useAtom(queryAtom)
  const [cuisine] = useAtom(cuisineAtom)
  const [diet] = useAtom(dietAtom)
  const [intolerance] = useAtom(intoleranceAtom)
  const [maxReadyTime] = useAtom(maxReadyTimeAtom)
  const [tag] = useAtom(tagAtom)
  const debouncedQuery = useDebounce(query, 1000)

  const hasQuery = !!debouncedQuery && debouncedQuery.length > 3
  const showSearchRecipes =
    hasQuery || !!cuisine || !!diet || !!intolerance || !!maxReadyTime

  const {
    data: randomData,
    isFetching: randomFetching,
    isFetchingNextPage: randomFetchingNextPage,
    isError: randomIsError,
    error: randomError,
    fetchNextPage: fetchNextRandomPage,
  } = useInfiniteQuery(
    ['random', tag],
    (ctx) => getRandomRecipes(ctx.queryKey[1]),
    {
      staleTime: Infinity,
      getNextPageParam: () => true,
    }
  )

  const {
    data: searchData,
    isFetching: searchFetching,
    isFetchingNextPage: searchFetchingNextPage,
    isError: searchIsError,
    fetchNextPage: fetchNextSearchPage,
  } = useInfiniteQuery(
    ['search', debouncedQuery, cuisine, diet, tag, intolerance, maxReadyTime],
    (ctx) =>
      searchRecipes({
        query: ctx.queryKey[1],
        cuisine: ctx.queryKey[2],
        diet: ctx.queryKey[3],
        type: ctx.queryKey[4],
        intolerances: ctx.queryKey[5],
        maxReadyTime: ctx.queryKey[6],
        offset: ctx.pageParam || 0,
      }),
    {
      enabled: showSearchRecipes,
      staleTime: Infinity,
      getNextPageParam: (lastPage) => lastPage.offset + lastPage.number,
    }
  )

  function flattenInfiniteData<T, K = any>(
    data: InfiniteData<K> | undefined,
    key: string
  ): T[] {
    if (!data) {
      return []
    }

    return data.pages.reduce<T[]>(
      (prev, curr) => [...prev, ...get(curr, key, [])],
      []
    )
  }

  const recipes = showSearchRecipes
    ? flattenInfiniteData<SearchRecipes200ResponseResultsInner>(
        searchData,
        'results'
      )
    : flattenInfiniteData<GetRandomRecipes200ResponseRecipesInner>(
        randomData,
        'recipes'
      )
  const isFetching =
    (randomFetching && !randomFetchingNextPage) ||
    (searchFetching && !searchFetchingNextPage)
  const isFetchingNextPage = randomFetchingNextPage || searchFetchingNextPage
  const isError = randomIsError || searchIsError

  function fetchNextPage() {
    showSearchRecipes ? fetchNextSearchPage() : fetchNextRandomPage()
  }

  const toastId = 'search-recipe'
  const toast = useToast()
  const isOverLimit = get(randomError, 'message') === 'over limit'

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

  if (isFetching) {
    return (
      <HStack w={'full'} justify={'center'}>
        <Spinner color={'blue.500'} />
      </HStack>
    )
  }

  if (isError) {
    return (
      <HStack
        spacing={4}
        w={'full'}
        maxW={'450px'}
        px={6}
        justify={'center'}
        alignSelf={'center'}
      >
        <Icon as={ExclamationCircleIcon} color={'red.500'} />
        <Text color={'GrayText'} fontWeight={'semibold'}>
          {isOverLimit
            ? 'The daily search limit for recipes has been reached, please try again tomorrow'
            : 'There was an issue fetching the recipes'}
        </Text>
      </HStack>
    )
  }

  return (
    <VStack w={'full'}>
      {recipes.length > 0 ? (
        <>
          <SimpleGrid w={'full'} px={px} columns={[1, 1, 2, 3, 4]} spacing={6}>
            {recipes.map((recipe, index) => (
              <RecipeCard
                key={`${recipe.id}-${index}`}
                recipe={recipe}
                priority={index === 0}
              />
            ))}
          </SimpleGrid>
          <HStack py={6} w={'full'}>
            <Button
              mx={'auto'}
              colorScheme={'green'}
              size={'sm'}
              isLoading={isFetchingNextPage}
              onClick={() => fetchNextPage()}
            >
              Load more
            </Button>
          </HStack>
        </>
      ) : (
        <HStack py={4}>
          <Text color={'GrayText'} fontWeight={'semibold'}>
            There was no results found 😕
          </Text>
        </HStack>
      )}
    </VStack>
  )
}
