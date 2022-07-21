import React, { type FC, useCallback, forwardRef } from 'react'
import {
  Box,
  Flex,
  IconButton,
  Show,
  Button,
  type ButtonProps,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  HomeIcon,
  BookmarkIcon,
  UserIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'
import { useBgColor } from '../hooks/useBgColor'
import { useRouter } from 'next/router'

const iconWidth = 30

interface NavbarButtonProps {
  text: string
  icon: ButtonProps['leftIcon']
  isSelected: boolean
  onClick?: () => void
}

const NavbarButton: FC<NavbarButtonProps> = ({
  text,
  icon,
  isSelected,
  onClick,
}) => {
  const iconSelectedColor = useColorModeValue('black', 'gray.300')
  const iconUnselectedColor = useColorModeValue('gray.400', 'gray.600')
  const iconColorScheme = useColorModeValue('blackAlpha', 'whiteAlpha')

  const getIconColor = useCallback(
    (isSelected: boolean) => {
      return isSelected ? iconSelectedColor : iconUnselectedColor
    },
    [iconSelectedColor, iconUnselectedColor]
  )

  return (
    <>
      <Show below={'lg'}>
        <IconButton
          variant={'ghost'}
          colorScheme={iconColorScheme}
          color={getIconColor(isSelected)}
          icon={icon}
          aria-label={text}
          onClick={onClick}
        />
      </Show>
      <Show above={'lg'}>
        <Button
          w={'full'}
          justifyContent={'flex-start'}
          variant={'ghost'}
          colorScheme={iconColorScheme}
          color={getIconColor(isSelected)}
          leftIcon={icon}
          onClick={onClick}
        >
          {text}
        </Button>
      </Show>
    </>
  )
}

export interface NavbarProps {}

export const Navbar = forwardRef<HTMLDivElement, NavbarProps>((_, ref) => {
  const router = useRouter()
  const { toggleColorMode } = useColorMode()
  const colorModeIcon = useColorModeValue(
    <MoonIcon width={iconWidth} />,
    <SunIcon width={iconWidth} />
  )

  const colorModeText = useColorModeValue('Dark mode', 'Light mode')
  const bg = useBgColor()
  const borderColor = useColorModeValue('gray.400', 'gray.600')

  return (
    <Box
      ref={ref}
      p={4}
      bg={bg}
      position={'fixed'}
      top={['auto', 0]}
      left={0}
      right={[0, 'auto']}
      bottom={[0, 'auto']}
      zIndex={20}
      h={['auto', 'full']}
      overflowX={'hidden'}
      borderRightWidth={['0', '1px']}
      borderTopWidth={['1px', '0']}
      borderColor={borderColor}
    >
      <Flex
        flexDirection={['row', 'column']}
        justify={['space-between', 'flex-start']}
        gap={[0, 8]}
      >
        <Link href={'/'} passHref>
          <Box as={'a'}>
            <NavbarButton
              text={'Home'}
              icon={<HomeIcon width={iconWidth} />}
              isSelected={router.pathname === '/'}
            />
          </Box>
        </Link>
        <NavbarButton
          text={'Saved'}
          icon={<BookmarkIcon width={iconWidth} />}
          isSelected={false}
        />
        <NavbarButton
          text={'User'}
          icon={<UserIcon width={iconWidth} />}
          isSelected={false}
        />
        <NavbarButton
          text={colorModeText}
          icon={colorModeIcon}
          isSelected={false}
          onClick={toggleColorMode}
        />
      </Flex>
    </Box>
  )
})

Navbar.displayName = 'Navbar'
