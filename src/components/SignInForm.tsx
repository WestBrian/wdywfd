import React, { type FC } from 'react'
import {
  Box,
  Button,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Divider,
  Hide,
  SlideFade,
  useColorModeValue,
} from '@chakra-ui/react'
import { GoogleIcon } from './GoogleIcon'
import { useAuth } from 'reactfire'
import { Auth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import foodBg from '../../public/foodBg.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'

export interface SignInFormProps {}

export const SignInForm: FC<SignInFormProps> = ({}) => {
  const auth = useAuth()
  const bg = useColorModeValue('white', 'gray.700')
  const secondaryColor = useColorModeValue('gray.500', 'gray.400')
  const router = useRouter()

  async function signIn(auth: Auth) {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
      router.push('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Container px={[6, 12]} py={6} maxW={'container.md'}>
      <Box bg={bg} rounded={'lg'} shadow={'md'} overflow={'hidden'}>
        <HStack w={'full'} spacing={0} align={'stretch'}>
          <Box w={['90%', null, '60%']}>
            <SlideFade offsetY={'20px'} in>
              <VStack w={'full'} spacing={8} align={'flex-start'} p={6}>
                <VStack spacing={4} align={'flex-start'}>
                  <Heading fontWeight={'semibold'} fontSize={'lg'}>
                    Sign in / Register
                  </Heading>
                  <Text>
                    Login to gain access to more features such as saving
                    recipes, creating shopping lists, and adding friends.
                  </Text>
                  <Divider />
                </VStack>
                <VStack spacing={4} align={'flex-start'}>
                  <Text fontWeight={'semibold'} color={secondaryColor}>
                    Supported providers:
                  </Text>
                  <SlideFade offsetY={'20px'} delay={0.1} in>
                    <Button
                      bg={'#4285F4'}
                      color={'white'}
                      fontWeight={'semibold'}
                      leftIcon={<GoogleIcon />}
                      _hover={{ bg: '#2b69cc' }}
                      _active={{ bg: '#1e56b0' }}
                      onClick={() => signIn(auth)}
                    >
                      Sign in with Google
                    </Button>
                  </SlideFade>
                </VStack>
              </VStack>
            </SlideFade>
          </Box>
          <Box w={['10%', null, '40%']} flexGrow={1} position={'relative'}>
            <Hide below={'md'}>
              <Image
                src={foodBg}
                layout={'fill'}
                objectFit={'cover'}
                alt={'food background'}
              />
            </Hide>
            <Box
              bg={'green.500'}
              position={'absolute'}
              inset={0}
              opacity={[1, null, 0.75]}
            />
          </Box>
        </HStack>
      </Box>
    </Container>
  )
}
