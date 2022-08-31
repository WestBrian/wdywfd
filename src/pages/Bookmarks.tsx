import React, { type FC } from 'react'
import { Container, Heading } from '@chakra-ui/react'

export interface BookmarksProps {}

export const Bookmarks: FC<BookmarksProps> = ({}) => {
  return (
    <Container px={[6, 12]} py={6} maxW={'full'}>
      <Heading as={'h1'} size={'lg'}>
        My Saved Recipes
      </Heading>
    </Container>
  )
}
