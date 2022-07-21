import React, { type ReactNode, type FC, useRef } from 'react'
import { Navbar } from './Navbar'
import { Box, useDimensions } from '@chakra-ui/react'

export interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const navbarRef = useRef(null)
  const dimensions = useDimensions(navbarRef, true)

  return (
    <>
      <Navbar ref={navbarRef} />
      {dimensions && (
        <Box
          ml={[0, `${dimensions.paddingBox.width}px`]}
          mb={[`${dimensions.paddingBox.height}px`, 'auto']}
        >
          {children}
        </Box>
      )}
    </>
  )
}
