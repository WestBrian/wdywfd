import React, { type FC } from 'react'
import { Box, Heading, Button } from '@chakra-ui/react'
import { useAuth, useSigninCheck } from 'reactfire'
import Image from 'next/image'
import { Auth } from 'firebase/auth'

function signOut(auth: Auth) {
  auth.signOut()
}

export interface BookmarksProps {}

export const Bookmarks: FC<BookmarksProps> = ({}) => {
  const { data } = useSigninCheck()
  const auth = useAuth()

  return (
    <Box>
      <Heading fontWeight={'semibold'}>My Recipes</Heading>
      {data.user && data.user.photoURL && (
        <Image
          src={data.user.photoURL}
          width={75}
          height={75}
          alt={data.user.displayName || 'User'}
        />
      )}
      <Button onClick={() => signOut(auth)}>Logout</Button>
    </Box>
  )
}
