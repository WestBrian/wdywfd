import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider as ReduxProvider } from 'react-redux'
import { getStore } from './src/store'
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from './pages/_app'
import { FirebaseProviders } from './src/components/FirebaseProviders'

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReduxProvider store={getStore()}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <FirebaseProviders>
          <ChakraProvider>{children}</ChakraProvider>
        </FirebaseProviders>
      </FirebaseAppProvider>
    </ReduxProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
