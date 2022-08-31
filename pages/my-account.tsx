import type { NextPage } from 'next'
import React from 'react'
import { RequireAuth } from '../src/components/RequireAuth'
import { MyAccount } from '../src/pages/MyAccount'

const MyAccountPage: NextPage = () => {
  return (
    <RequireAuth>
      <MyAccount />
    </RequireAuth>
  )
}

export default MyAccountPage
