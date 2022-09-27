import React, { type FC } from 'react'
import { Container, Heading, VStack, SimpleGrid } from '@chakra-ui/react'
import {
  useSigninCheck,
  useFirestoreCollectionData,
  useFirestore,
} from 'reactfire'
import { collection, query } from 'firebase/firestore'
import get from 'lodash/get'
import { RecipeCard } from '../components/RecipeCard'

export interface BookmarksProps {}

export const Bookmarks: FC<BookmarksProps> = ({}) => {
  const { data: user } = useSigninCheck()
  const db = useFirestore()
  const { data } = useFirestoreCollectionData(
    query(collection(db, `users/${get(user, 'user.uid')}/recipes`)),
    {
      idField: '_id',
    }
  )

  return (
    <Container px={[6, 12]} py={6} maxW={'full'}>
      <VStack spacing={6} align={'flex-start'}>
        <Heading as={'h1'} size={'lg'}>
          My Saved Recipes
        </Heading>
        <SimpleGrid w={'full'} columns={[1, 2, 3]} spacing={6}>
          {(data || []).map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe as any} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}
