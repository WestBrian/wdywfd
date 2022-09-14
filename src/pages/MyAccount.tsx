import {
  Container,
  HStack,
  VStack,
  Divider,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  Switch,
  useColorMode,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import React, { type ReactNode, type FC } from 'react'
import { useSigninCheck, useAuth } from 'reactfire'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

interface SectionProps {
  title: string
  children: ReactNode
}

const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <VStack w={'full'} spacing={4} align={'flex-start'}>
      <VStack w={'full'} spacing={2} align={'flex-start'}>
        <Heading as={'h2'} size={'sm'}>
          {title}
        </Heading>
        <Divider />
      </VStack>
      {children}
    </VStack>
  )
}

export interface MyAccountProps {}

export const MyAccount: FC<MyAccountProps> = ({}) => {
  const {
    data: { user },
  } = useSigninCheck()
  const auth = useAuth()

  const { colorMode, setColorMode } = useColorMode()

  /* istanbul ignore if */
  if (!user) {
    return null
  }

  return (
    <Container px={[6, 12]} py={6} maxW={'full'}>
      <VStack w={'full'} spacing={12}>
        <Flex w={'full'} justify={'space-between'} align={'center'}>
          <Heading as={'h1'} size={'lg'}>
            My Account
          </Heading>
          <Button onClick={() => auth.signOut()}>Logout</Button>
        </Flex>
        <Section title={'Basic Information'}>
          <HStack spacing={2} align={'center'}>
            <Icon as={EnvelopeIcon} />
            <Text>{user.email}</Text>
          </HStack>
        </Section>
        <Section title={'Settings'}>
          <FormControl display={'flex'} alignItems={'center'}>
            <FormLabel htmlFor={'dark-mode'} mb={0}>
              Dark mode
            </FormLabel>
            <Switch
              id={'dark-mode'}
              isChecked={colorMode === 'dark'}
              onChange={(e) =>
                setColorMode(e.target.checked ? 'dark' : 'light')
              }
            />
          </FormControl>
        </Section>
      </VStack>
    </Container>
  )
}
