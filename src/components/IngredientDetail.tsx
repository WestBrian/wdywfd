import {
  Box,
  Flex,
  HStack,
  Square,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { type FC, useMemo } from 'react'
import { InlineResponse2003ExtendedIngredients } from '../../spoonacular-sdk'
import { foodToEmoji } from '../utils/foodToEmoji'
import startCase from 'lodash/startCase'
import round from 'lodash/round'
import { motion, Variants } from 'framer-motion'

const animation: Variants = {
  hidden: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
  },
}

function formatAmount(amount: number) {
  if (!Number.isInteger(amount)) {
    return round(amount, 2)
  }
  return amount
}

export interface IngredientDetailProps {
  ingredient: InlineResponse2003ExtendedIngredients
  adjustedServings: number
  servings: number
}

export const IngredientDetail: FC<IngredientDetailProps> = ({
  ingredient,
  adjustedServings,
  servings,
}) => {
  const bg = useColorModeValue('gray.200', 'gray.700')
  const unitColor = useColorModeValue('gray.500', 'gray.400')

  const emoji = useMemo(() => {
    return foodToEmoji(ingredient.name)
  }, [ingredient.name])

  const servingAmount = useMemo(() => {
    const perc = adjustedServings / servings
    return ingredient.amount * perc
  }, [ingredient.amount, adjustedServings, servings])

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
      <Flex w={'full'} justify={'space-between'} align={'center'}>
        <HStack spacing={4}>
          <Square bg={'white'} borderRadius={'lg'} size={'40px'}>
            {emoji}
          </Square>
          <Text fontSize={'sm'} fontWeight={'semibold'}>
            {startCase(ingredient.name)}
          </Text>
        </HStack>
        <Text
          fontSize={'xs'}
          fontWeight={'semibold'}
          color={unitColor}
          whiteSpace={'nowrap'}
        >
          {formatAmount(servingAmount)} {ingredient.unit}
        </Text>
      </Flex>
    </Box>
  )
}
