import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from './pages/_app'
import { FirebaseProviders } from './src/components/FirebaseProviders'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Provider as JotaiProvider } from 'jotai'

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <FirebaseProviders>
            <ChakraProvider>{children}</ChakraProvider>
          </FirebaseProviders>
        </FirebaseAppProvider>
      </QueryClientProvider>
    </JotaiProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
export function castMocked(func: () => void): jest.Mock {
  return func as jest.Mock
}
