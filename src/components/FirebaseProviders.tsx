/* istanbul ignore file */
import React, { useState, useEffect, type ReactNode, type FC } from 'react'
import { AuthProvider, FirestoreProvider, useFirebaseApp } from 'reactfire'
import { getAuth, connectAuthEmulator, User } from 'firebase/auth'
import {
  getFirestore,
  connectFirestoreEmulator,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'

const doNotMockDb = process.env.NEXT_PUBLIC_DB_PROD === 'enabled'

export interface FirebaseProvidersProps {
  children: ReactNode
}

export const FirebaseProviders: FC<FirebaseProvidersProps> = ({ children }) => {
  const app = useFirebaseApp()
  const auth = getAuth(app)
  const firestore = getFirestore(app)
  const [user, setUser] = useState<User | null>(null)

  if (process.env.NODE_ENV === 'development') {
    if (typeof window !== 'undefined' && !doNotMockDb && !auth.emulatorConfig) {
      console.log('--- 🔧 Setting up emulators 🔧 ---')
      connectAuthEmulator(auth, 'http://localhost:9099', {
        disableWarnings: true,
      })
      connectFirestoreEmulator(firestore, 'localhost', 8080)
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      }
    })

    return () => unsubscribe()
  }, [auth, setUser])

  useEffect(() => {
    if (user) {
      const userRef = doc(firestore, `users/${user.uid}`)
      getDoc(userRef).then((snapshot) => {
        if (!snapshot.exists()) {
          setDoc(userRef, {
            email: user.email,
          })
        }
      })
    }
  }, [user, firestore])

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>{children}</FirestoreProvider>
    </AuthProvider>
  )
}
