import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'
import { Provider as ReduxProvider } from 'react-redux'
import { setupStore } from '../src/store'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../src/lib/mocks')
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={setupStore()}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  )
}

export default MyApp
