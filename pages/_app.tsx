import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'
import { Provider as ReduxProvider } from 'react-redux'
import { getStore } from '../src/store'
import React, { useMemo } from 'react'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../src/lib/mocks')
}

function MyApp({ Component, pageProps }: AppProps) {
  const store = useMemo(() => getStore(), [])

  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  )
}

export default MyApp
