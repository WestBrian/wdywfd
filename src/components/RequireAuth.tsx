import React, { useEffect, type ReactNode, type FC } from 'react'
import { useSigninCheck } from 'reactfire'
import { useRouter } from 'next/router'

export interface RequireAuthProps {
  children: ReactNode
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const { status, data } = useSigninCheck()
  const router = useRouter()

  useEffect(() => {
    if (data && !data.signedIn) {
      router.push('/sign-in')
    }
  }, [router, data])

  if (status === 'loading' || !data.signedIn) {
    return null
  }

  return <>{children}</>
}
