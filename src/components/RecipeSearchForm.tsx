import { SearchIcon } from '@chakra-ui/icons'
import {
  HStack,
  VStack,
  FormControl,
  VisuallyHidden,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
  Button,
  IconButton,
  useColorModeValue,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react'
import { AdjustmentsIcon } from '@heroicons/react/solid'
import React, { type FC, useRef, FormEvent } from 'react'
import { useAtom } from 'jotai'
import {
  queryAtom,
  cuisines,
  diets,
  cuisineAtom,
  dietAtom,
  intolerances,
  intoleranceAtom,
  maxReadyTimeAtom,
} from '../store'
import startCase from 'lodash/startCase'
import { useBgColor } from '../hooks/useBgColor'

export interface RecipeSearchFormProps {}

export const RecipeSearchForm: FC<RecipeSearchFormProps> = ({}) => {
  const [query, setQuery] = useAtom(queryAtom)
  const [cuisine, setCuisine] = useAtom(cuisineAtom)
  const [diet, setDiet] = useAtom(dietAtom)
  const [intolerance, setIntolerance] = useAtom(intoleranceAtom)
  const [maxReadyTime, setMaxReadyTime] = useAtom(maxReadyTimeAtom)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  const iconColor = useColorModeValue('gray.300', 'gray.900')
  const bgColor = useBgColor()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const elements = form.elements
    const cuisinesSelect = elements.namedItem('cuisine') as HTMLSelectElement
    const dietsSelect = elements.namedItem('diets') as HTMLSelectElement
    const intolerancesSelect = elements.namedItem(
      'intolerances'
    ) as HTMLSelectElement
    const maxReadyTimeInput = elements.namedItem(
      'maxReadyTime'
    ) as HTMLInputElement

    setCuisine(cuisinesSelect.value)
    setDiet(dietsSelect.value)
    setIntolerance(intolerancesSelect.value)
    setMaxReadyTime(maxReadyTimeInput.value)

    onClose()
  }

  function handleReset() {
    setCuisine('')
    setDiet('')
    setIntolerance('')
    setMaxReadyTime('')
    // TODO: Leave drawer open
    onClose()
  }

  return (
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
            form={'search-form'}
            type={'search'}
            value={query}
            placeholder={'Search recipes'}
            boxShadow={'sm'}
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputGroup>
      </FormControl>
      <Box>
        <IconButton
          ref={btnRef}
          colorScheme={'teal'}
          aria-label={'Filters'}
          icon={<AdjustmentsIcon width={20} />}
          onClick={onOpen}
        />
        <Drawer
          isOpen={isOpen}
          placement={'right'}
          finalFocusRef={btnRef}
          size={'md'}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent bg={bgColor}>
            <DrawerCloseButton />
            <DrawerHeader>Add filters</DrawerHeader>

            <DrawerBody>
              <Box
                as={'form'}
                name={'search recipe form'}
                id={'search-form'}
                onSubmit={handleSubmit}
              >
                <VStack spacing={6}>
                  <FormControl>
                    <FormLabel htmlFor={'cuisine'}>Cuisine</FormLabel>
                    <Select
                      id={'cuisine'}
                      defaultValue={cuisine}
                      placeholder={'Select a cuisine'}
                    >
                      {cuisines.map((cuisine) => (
                        <option key={cuisine} value={cuisine}>
                          {startCase(cuisine)}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor={'diets'}>Diets</FormLabel>
                    <Select
                      id={'diets'}
                      defaultValue={diet}
                      placeholder={'Select a diet'}
                    >
                      {diets.map((diet) => (
                        <option key={diet} value={diet}>
                          {startCase(diet)}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor={'intolerances'}>Intolerances</FormLabel>
                    <Select
                      id={'intolerances'}
                      defaultValue={intolerance}
                      placeholder={'Select an intolerance'}
                    >
                      {intolerances.map((intolerance) => (
                        <option key={intolerance} value={intolerance}>
                          {startCase(intolerance)}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor={'maxReadyTime'}>
                      Max Ready Time
                    </FormLabel>
                    <NumberInput
                      id={'maxReadyTime'}
                      defaultValue={maxReadyTime}
                    >
                      <NumberInputField placeholder={'20'} />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                </VStack>
              </Box>
            </DrawerBody>

            <DrawerFooter>
              <HStack>
                <Button
                  variant={'outline'}
                  colorScheme={'red'}
                  onClick={handleReset}
                >
                  Reset filters
                </Button>
                <Button
                  type={'submit'}
                  form={'search-form'}
                  colorScheme={'green'}
                >
                  Update filters
                </Button>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </HStack>
  )
}
