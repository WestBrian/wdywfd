import 'nprogress/nprogress.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'
import React, { useMemo } from 'react'
import { Layout } from '../src/components/Layout'
import { FirebaseAppProvider } from 'reactfire'
import { FirebaseProviders } from '../src/components/FirebaseProviders'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider as JotaiProvider } from 'jotai'
import { isLowerEnv } from '../src/utils/isEnv'
import { LoadProgressIndicator } from '../src/components/LoadProgressIndicator'

if (isLowerEnv && process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../src/lib/mocks')
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

export const firebaseConfig = {
  apiKey: 'AIzaSyBXIixYPVYJATHkJZVmj9RSGY2-a3jlYxo',
  authDomain: 'whats-for-dinner-cc0f4.firebaseapp.com',
  projectId: 'whats-for-dinner-cc0f4',
  storageBucket: 'whats-for-dinner-cc0f4.appspot.com',
  messagingSenderId: '675481257123',
  appId: '1:675481257123:web:a0819bf32d02deace42b16',
  measurementId: 'G-KHWFHE5CED',
}

function App({ Component, pageProps }: AppProps) {
  const forPaths = useMemo(() => ['/recipe/'], [])

  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <FirebaseProviders>
            <ChakraProvider theme={theme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
              <LoadProgressIndicator forPaths={forPaths} />
            </ChakraProvider>
          </FirebaseProviders>
        </FirebaseAppProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </JotaiProvider>
  )
}

export default App
