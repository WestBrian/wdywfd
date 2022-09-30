import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import {
  IconButton,
  chakra,
  useColorModeValue,
  shouldForwardProp,
} from '@chakra-ui/react'
import React, { type FC } from 'react'
import { useSigninCheck, useFirestore, useFirestoreDoc } from 'reactfire'
import { useRouter } from 'next/router'
import { doc, setDoc, deleteDoc } from 'firebase/firestore'
import type { GetRecipeInformation200Response } from 'spoonacular-js-sdk'
import { isValidMotionProp, motion } from 'framer-motion'
import type { User } from 'firebase/auth'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

interface InnerButtonProps {
  isSaved: boolean
  onClick: () => void
}

const InnerButton: FC<InnerButtonProps> = ({ isSaved, onClick }) => {
  const iconColor = useColorModeValue('black', 'white')
  const bg = useColorModeValue('white', 'gray.700')

  return (
    <ChakraBox
      bg={bg}
      whileHover={{ y: -1 }}
      position={'absolute'}
      top={'8px'}
      right={'8px'}
      rounded={'md'}
      shadow={'lg'}
    >
      <IconButton
        variant={'unstyled'}
        icon={
          isSaved ? (
            <HeartIconSolid width={24} color={'#E53E3E'} />
          ) : (
            <HeartIconOutline width={24} color={iconColor} />
          )
        }
        size={'sm'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        aria-label={'Save recipe'}
        data-splitbee-event={'Save Recipe'}
        onClick={onClick}
      />
    </ChakraBox>
  )
}

const SignedOutButton: FC = () => {
  const router = useRouter()

  function redirect() {
    router.push('/sign-in')
  }

  return <InnerButton isSaved={false} onClick={redirect} />
}

interface SignedInButtonProps {
  recipe: GetRecipeInformation200Response
  user: User
}

const SignedInButton: FC<SignedInButtonProps> = ({ recipe, user }) => {
  const db = useFirestore()
  const uid = user.uid
  const recipeRef = doc(db, `users/${uid}/recipes/${recipe.id}`)
  const { data: recipeSnapshot } = useFirestoreDoc(recipeRef)
  const isSaved = recipeSnapshot?.exists()

  function toggleRecipe() {
    isSaved
      ? deleteDoc(recipeRef)
      : setDoc(recipeRef, {
          id: recipe.id,
          title: recipe.title,
          ...(recipe.image ? { image: recipe.image } : {}),
        })
  }

  return <InnerButton isSaved={isSaved} onClick={toggleRecipe} />
}

export interface SaveButtonProps {
  recipe: GetRecipeInformation200Response
}

export const SaveButton: FC<SaveButtonProps> = ({ recipe }) => {
  const { data } = useSigninCheck()
  const user = data?.user

  return user ? (
    <SignedInButton recipe={recipe} user={user} />
  ) : (
    <SignedOutButton />
  )
}
