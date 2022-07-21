import { useColorModeValue } from '@chakra-ui/react'

export function useBgColor() {
  return useColorModeValue('gray.100', 'gray.800')
}
