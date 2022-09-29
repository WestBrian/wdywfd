import React, { type ReactNode, type FC, useRef } from 'react'
import { Navbar } from './Navbar'
import { Box } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'

export interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const navbarRef = useRef(null)
  const dimensions = useSize(navbarRef)

  return (
    <>
      <Navbar ref={navbarRef} />
      {dimensions && (
        <Box
          ml={['auto', `${dimensions.width}px`]}
          mb={[`${dimensions.height}px`, 'auto']}
        >
          {children}
        </Box>
      )}
    </>
  )
}
