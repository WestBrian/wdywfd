import {
  Button,
  HStack,
  VStack,
  Box,
  Badge,
  useColorModeValue,
  useRadio,
  useRadioGroup,
  chakra,
} from '@chakra-ui/react'
import React, { type FC, useState, useEffect, useRef } from 'react'
import { useWindowScroll } from 'beautiful-react-hooks'
import { px } from '../pages/RecipeSearch'
import { RecipeSearchForm } from './RecipeSearchForm'
import { useAtom } from 'jotai'
import {
  tags,
  tagAtom,
  cuisineAtom,
  dietAtom,
  intoleranceAtom,
  maxReadyTimeAtom,
} from '../store'

interface RecipeTagProps {
  tag: string
}

const RecipeTag: FC<RecipeTagProps> = ({ tag, ...radioProps }) => {
  const { htmlProps, getInputProps, getCheckboxProps, state, getLabelProps } =
    useRadio(radioProps)

  return (
    <chakra.label {...htmlProps} cursor={'pointer'}>
      <input {...getInputProps({})} hidden />
      <Button
        as={'div'}
        {...getCheckboxProps()}
        minW={'fit-content'}
        colorScheme={state.isChecked ? 'green' : undefined}
        data-splitbee-event={'Select Tag'}
        data-splitbee-event-tag={tag}
      >
        <span {...getLabelProps()}>{tag.toUpperCase()}</span>
      </Button>
    </chakra.label>
  )
}

export interface RecipeSearchSectionProps {}

export const RecipeSearchSection: FC<RecipeSearchSectionProps> = () => {
  const [tag, setTag] = useAtom(tagAtom)
  const [cuisine] = useAtom(cuisineAtom)
  const [diet] = useAtom(dietAtom)
  const [intolerance] = useAtom(intoleranceAtom)
  const [maxReadyTime] = useAtom(maxReadyTimeAtom)
  const tagContainerRef = useRef<HTMLDivElement>(null)

  const showBadges = !!cuisine || !!diet || !!intolerance || !!maxReadyTime

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: tag,
    onChange: setTag,
  })

  const [showShadow, setShowShadow] = useState(false)
  const bgColor = useColorModeValue('gray.100', 'gray.800')
  const onWindowScroll = useWindowScroll()

  /* istanbul ignore next */
  onWindowScroll(() => {
    if (window.scrollY >= 72.5) {
      setShowShadow(true)
    } else {
      setShowShadow(false)
    }
  })

  /* istanbul ignore next */
  const shadowValue = showShadow ? '2xl' : 'none'

  useEffect(() => {
    const tagContainer = tagContainerRef.current
    if (tagContainer) {
      const selectedElm =
        tagContainer.querySelector<HTMLDivElement>('*[data-checked]')
      if (selectedElm) {
        tagContainer.scrollTo({
          left: selectedElm.offsetLeft,
        })
      }
    }
  }, [tagContainerRef])

  return (
    <VStack
      spacing={6}
      px={px}
      py={6}
      w={'full'}
      bg={bgColor}
      position={'sticky'}
      top={0}
      left={0}
      zIndex={10}
      boxShadow={[shadowValue, null, 'none']}
    >
      <RecipeSearchForm />
      <Box position={'relative'} w={'full'}>
        <HStack
          {...getRootProps({}, tagContainerRef)}
          w={'full'}
          overflowX={'scroll'}
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          data-testid={'tag-container'}
        >
          {tags.map((tag) => (
            <RecipeTag key={tag} tag={tag} {...getRadioProps({ value: tag })} />
          ))}
        </HStack>
      </Box>
      {showBadges && (
        <HStack w={'full'}>
          {cuisine && <Badge colorScheme={'green'}>{cuisine}</Badge>}
          {diet && <Badge colorScheme={'green'}>{diet}</Badge>}
          {intolerance && <Badge colorScheme={'green'}>No {intolerance}</Badge>}
          {maxReadyTime && (
            <Badge colorScheme={'green'}>{maxReadyTime} minutes or less</Badge>
          )}
        </HStack>
      )}
    </VStack>
  )
}
