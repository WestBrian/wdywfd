import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider as ReduxProvider } from 'react-redux'
import { setupStore } from './src/store'

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReduxProvider store={setupStore()}>
      <ChakraProvider>{children}</ChakraProvider>
    </ReduxProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
