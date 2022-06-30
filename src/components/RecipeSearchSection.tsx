import { SearchIcon } from '@chakra-ui/icons'
import {
  InputGroup,
  InputLeftElement,
  Input,
  FormControl,
  FormLabel,
  Button,
  IconButton,
  HStack,
  VStack,
  Box,
  Icon,
  VisuallyHidden,
  useColorModeValue,
  useRadio,
  useRadioGroup,
  chakra,
} from '@chakra-ui/react'
import { type FC, useState } from 'react'
import { AdjustmentsIcon } from '@heroicons/react/solid'
import { useWindowScroll } from 'beautiful-react-hooks'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { setQuery, setTag } from '../reducers/recipe-search'

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
      >
        <span {...getLabelProps()}>{tag.toUpperCase()}</span>
      </Button>
    </chakra.label>
  )
}

export interface RecipeSearchSectionProps {}

export const RecipeSearchSection: FC<RecipeSearchSectionProps> = () => {
  const dispatch = useDispatch()
  const query = useSelector((state: RootState) => state.recipeSearch.query)
  const tag = useSelector((state: RootState) => state.recipeSearch.selectedTag)
  const tags = useSelector((state: RootState) => state.recipeSearch.tags)

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: tag,
    onChange: (value) => dispatch(setTag(value as any)),
  })

  const [showShadow, setShowShadow] = useState(false)
  const iconColor = useColorModeValue('gray.300', 'gray.900')
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

  return (
    <VStack
      spacing={6}
      p={6}
      w={'full'}
      bg={bgColor}
      position={'sticky'}
      top={0}
      left={0}
      zIndex={10}
      boxShadow={[shadowValue, null, 'none']}
    >
      <HStack w={'full'}>
        <FormControl>
          <VisuallyHidden>
            <FormLabel htmlFor={'query'}>Recipe Query</FormLabel>
          </VisuallyHidden>
          <InputGroup>
            <InputLeftElement pointerEvents={'none'}>
              <SearchIcon color={iconColor} />
            </InputLeftElement>
            <Input
              id={'query'}
              value={query}
              placeholder={'Search recipes'}
              boxShadow={'sm'}
              onChange={(event) => dispatch(setQuery(event.target.value))}
            />
          </InputGroup>
        </FormControl>
        <IconButton
          bg={'green.50'}
          aria-label={'Filters'}
          icon={<Icon as={AdjustmentsIcon} color={'green.500'} />}
        />
      </HStack>
      <Box position={'relative'} w={'full'}>
        <HStack {...getRootProps()} w={'full'} overflowX={'scroll'}>
          {tags.map((tag) => (
            <RecipeTag key={tag} tag={tag} {...getRadioProps({ value: tag })} />
          ))}
        </HStack>
        <Box
          position={'absolute'}
          top={0}
          right={0}
          bottom={0}
          left={'85%'}
          pointerEvents={'none'}
          bgGradient={'linear(to-l, white, transparent)'}
        />
      </Box>
    </VStack>
  )
}
