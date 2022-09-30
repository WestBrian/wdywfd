import React, { type FC } from 'react'
import { Box, IconButton, Text, HStack } from '@chakra-ui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'

export interface ServingsButtonProps {
  servings: number
  setServings: (servings: number) => void
}

export const ServingsButton: FC<ServingsButtonProps> = ({
  servings,
  setServings,
}) => {
  return (
    <Box bg={'green.400'} p={1} borderRadius={'md'}>
      <HStack spacing={2}>
        <Text fontSize={'sm'} fontWeight={'semibold'} color={'white'}>
          {servings} serving{servings > 1 ? 's' : ''}
        </Text>
        <HStack spacing={1}>
          <IconButton
            size={'xs'}
            colorScheme={'green'}
            aria-label={'less servings'}
            icon={<MinusIcon width={15} />}
            disabled={servings <= 1}
            data-splitbee-event={'Decrease Servings'}
            onClick={() => setServings(servings - 1)}
          />
          <IconButton
            size={'xs'}
            colorScheme={'green'}
            aria-label={'more servings'}
            icon={<PlusIcon width={15} />}
            data-splitbee-event={'Increase Servings'}
            onClick={() => setServings(servings + 1)}
          />
        </HStack>
      </HStack>
    </Box>
  )
}
