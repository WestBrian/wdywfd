import React, { type FC, forwardRef } from 'react'
import {
  Box,
  Flex,
  IconButton,
  Show,
  Button,
  useColorMode,
  useColorModeValue,
  type As,
  type ButtonProps,
} from '@chakra-ui/react'
import {
  HomeIcon,
  BookmarkIcon,
  SunIcon,
  MoonIcon,
  UserIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'

const iconWidth = 30

export function useNavbarColor(isSelected: boolean) {
  const iconSelectedColor = useColorModeValue('black', 'gray.300')
  const iconUnselectedColor = useColorModeValue('gray.400', 'gray.600')

  return isSelected ? iconSelectedColor : iconUnselectedColor
}

export function useNavbarColorScheme() {
  return useColorModeValue('blackAlpha', 'whiteAlpha')
}

interface NavbarButtonProps {
  text: string
  icon: ButtonProps['leftIcon']
  isSelected: boolean
  as?: As<any>
  onClick?: () => void
}

const NavbarButton: FC<NavbarButtonProps> = ({
  text,
  icon,
  isSelected,
  as,
  onClick,
}) => {
  const color = useNavbarColor(isSelected)
  const colorScheme = useNavbarColorScheme()

  return (
    <>
      <Show below={'lg'}>
        <IconButton
          as={as}
          variant={'ghost'}
          colorScheme={colorScheme}
          color={color}
          icon={icon}
          aria-label={text}
          onClick={onClick}
        />
      </Show>
      <Show above={'lg'}>
        <Button
          as={as}
          w={'full'}
          justifyContent={'flex-start'}
          variant={'ghost'}
          colorScheme={colorScheme}
          color={color}
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
  const bg = useColorModeValue('gray.50', 'gray.900')
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
        <Link href={'/bookmarks'} passHref>
          <Box as={'a'}>
            <NavbarButton
              text={'My Recipes'}
              icon={<BookmarkIcon width={iconWidth} />}
              isSelected={router.pathname === '/bookmarks'}
            />
          </Box>
        </Link>
        <NavbarButton
          text={colorModeText}
          icon={colorModeIcon}
          isSelected={false}
          onClick={toggleColorMode}
        />
        <Link href={'/my-account'} passHref>
          <Box as={'a'}>
            <NavbarButton
              text={'My Account'}
              icon={<UserIcon width={iconWidth} />}
              isSelected={router.pathname === 'my-account'}
            />
          </Box>
        </Link>
      </Flex>
    </Box>
  )
})

Navbar.displayName = 'Navbar'
