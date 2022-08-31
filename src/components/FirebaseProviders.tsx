/* istanbul ignore file */
import React, { useState, useEffect, type ReactNode, type FC } from 'react'
import { AuthProvider, FirestoreProvider, useFirebaseApp } from 'reactfire'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import {
  getFirestore,
  connectFirestoreEmulator,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'
import { isDev, isBrowser } from '../utils/isEnv'

export interface FirebaseProvidersProps {
  children: ReactNode
}

export const FirebaseProviders: FC<FirebaseProvidersProps> = ({ children }) => {
  const app = useFirebaseApp()
  const auth = getAuth(app)
  const firestore = getFirestore(app)
  const [uid, setUid] = useState<string | null>(null)

  if (isDev && isBrowser && !auth.emulatorConfig) {
    console.log('--- 🔧 Setting up emulators 🔧 ---')
    connectAuthEmulator(auth, 'http://localhost:9099')
    connectFirestoreEmulator(firestore, 'localhost', 8080)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid)
      }
    })

    return () => unsubscribe()
  }, [auth, setUid])

  useEffect(() => {
    if (uid) {
      const userRef = doc(firestore, 'users', uid)
      getDoc(userRef).then((snapshot) => {
        if (!snapshot.exists()) {
          setDoc(userRef, {})
        }
      })
    }
  }, [uid, firestore])

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>{children}</FirestoreProvider>
    </AuthProvider>
  )
}
