import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'
import { Provider as ReduxProvider } from 'react-redux'
import { getStore } from '../src/store'
import React, { useMemo } from 'react'
import { Layout } from '../src/components/Layout'
import { FirebaseAppProvider } from 'reactfire'
import { FirebaseProviders } from '../src/components/FirebaseProviders'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../src/lib/mocks')
}

export const firebaseConfig = {
  apiKey: 'AIzaSyBXIixYPVYJATHkJZVmj9RSGY2-a3jlYxo',
  authDomain: 'whats-for-dinner-cc0f4.firebaseapp.com',
  projectId: 'whats-for-dinner-cc0f4',
  storageBucket: 'whats-for-dinner-cc0f4.appspot.com',
  messagingSenderId: '675481257123',
  appId: '1:675481257123:web:a0819bf32d02deace42b16',
  measurementId: 'G-KHWFHE5CED',
}

function MyApp({ Component, pageProps }: AppProps) {
  const store = useMemo(() => getStore(), [])

  return (
    <ReduxProvider store={store}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <FirebaseProviders>
          <ChakraProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </FirebaseProviders>
      </FirebaseAppProvider>
    </ReduxProvider>
  )
}

export default MyApp
