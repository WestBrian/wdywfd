import { type FC } from 'react'
import { Container, Heading, VStack, Button, HStack } from '@chakra-ui/react'
import { RecipeSearchSection } from '../components/RecipeSearchSection'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { RecipeCardSection } from '../components/RecipeCardSection'
import { setTagPages } from '../reducers/recipe-search'

export interface RecipeSearchProps {}

export const RecipeSearch: FC<RecipeSearchProps> = () => {
  const dispatch = useDispatch()
  const selectedTag = useSelector(
    (state: RootState) => state.recipeSearch.selectedTag
  )
  const selectedTagPage = useSelector((state: RootState) =>
    state.recipeSearch.tagPages.find((tagPage) => tagPage.tag === selectedTag)
  )
  /* istanbul ignore next */
  const pages = selectedTagPage?.pages || 1

  return (
    <Container p={0} maxW={'container.md'}>
      <VStack spacing={0} align={'flex-start'}>
        <Heading size={'lg'} px={6} pt={6}>
          Find Recipes
        </Heading>
        <RecipeSearchSection />
        <VStack w={'full'} spacing={6}>
          {Array.from(Array(pages)).map((_, i) => (
            <RecipeCardSection key={`cards-${i}`} page={i} tag={selectedTag} />
          ))}
        </VStack>
        <HStack py={6} w={'full'}>
          <Button
            mx={'auto'}
            colorScheme={'green'}
            size={'sm'}
            onClick={() =>
              dispatch(setTagPages({ tag: selectedTag, pages: pages + 1 }))
            }
          >
            Load more
          </Button>
        </HStack>
      </VStack>
    </Container>
  )
}
