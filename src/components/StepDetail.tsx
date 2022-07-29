import { Box, HStack, Square, Text, useColorModeValue } from '@chakra-ui/react'
import React, { type FC } from 'react'
import { InlineResponse20013Steps } from '../../spoonacular-sdk'
import { motion, Variants } from 'framer-motion'

const animation: Variants = {
  hidden: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
  },
}

export interface StepDetailProps {
  step: InlineResponse20013Steps
}

export const StepDetail: FC<StepDetailProps> = ({ step }) => {
  const bg = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      as={motion.li}
      w={'full'}
      p={2}
      borderRadius={'lg'}
      bg={bg}
      listStyleType={'none'}
      variants={animation}
    >
      <HStack spacing={4}>
        <Square
          bg={'white'}
          borderRadius={'lg'}
          size={'40px'}
          fontWeight={'semibold'}
          color={'gray.900'}
        >
          {step.number}
        </Square>
        <Text fontSize={'sm'}>{step.step}</Text>
      </HStack>
    </Box>
  )
}
