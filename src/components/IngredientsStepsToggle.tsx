import React, { type FC, useState, useRef } from 'react'
import {
  Button,
  HStack,
  Box,
  useDimensions,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

export interface IngredientsStepsToggleProps {
  numOfIngredients: number
  numOfSteps: number
  tab: 'ingredients' | 'steps'
  setTab: (tab: 'ingredients' | 'steps') => void
}

export const IngredientsStepsToggle: FC<IngredientsStepsToggleProps> = ({
  numOfIngredients,
  numOfSteps,
  tab,
  setTab,
}) => {
  const iRef = useRef(null)
  const sRef = useRef(null)
  const iDim = useDimensions(iRef, true)
  const sDim = useDimensions(sRef, true)

  const isIngredients = tab === 'ingredients'
  const padding = 2
  const paddingOffset = `${padding * 4}px`

  const wrapperBg = useColorModeValue('gray.200', 'gray.700')
  const hover = useColorModeValue({ bg: 'transparent' }, undefined)
  const active = useColorModeValue({ bg: 'transparent' }, undefined)
  const bg = useColorModeValue('green.500', 'green.200')
  const color = useColorModeValue('white', 'gray.800')

  return (
    <Box
      w={['full', null, 'auto']}
      bg={wrapperBg}
      p={padding}
      borderRadius={'md'}
      position={'relative'}
    >
      {iDim && sDim && (
        <Box
          as={motion.div}
          position={'absolute'}
          bg={bg}
          borderRadius={'md'}
          top={paddingOffset}
          left={isIngredients ? paddingOffset : 'auto'}
          right={isIngredients ? 'auto' : paddingOffset}
          bottom={paddingOffset}
          width={isIngredients ? iDim.paddingBox.width : sDim.paddingBox.width}
          layout
        />
      )}
      <HStack w={'full'} spacing={2}>
        <Button
          ref={iRef}
          w={['full', null, 'auto']}
          variant={'ghost'}
          colorScheme={'green'}
          size={'sm'}
          color={isIngredients ? color : undefined}
          _hover={hover}
          _active={active}
          onClick={() => setTab('ingredients')}
        >
          Ingredients ({numOfIngredients})
        </Button>
        <Button
          ref={sRef}
          w={['full', null, 'auto']}
          variant={'ghost'}
          colorScheme={'green'}
          size={'sm'}
          color={!isIngredients ? color : undefined}
          _hover={hover}
          _active={active}
          onClick={() => setTab('steps')}
        >
          Steps ({numOfSteps})
        </Button>
      </HStack>
    </Box>
  )
}
