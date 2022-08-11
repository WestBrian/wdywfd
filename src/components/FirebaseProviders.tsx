import React, { ReactNode, type FC } from 'react'
import { AuthProvider, useFirebaseApp } from 'reactfire'
import { getAuth } from 'firebase/auth'

export interface FirebaseProvidersProps {
  children: ReactNode
}

export const FirebaseProviders: FC<FirebaseProvidersProps> = ({ children }) => {
  const authInstance = getAuth(useFirebaseApp())

  return <AuthProvider sdk={authInstance}>{children}</AuthProvider>
}
