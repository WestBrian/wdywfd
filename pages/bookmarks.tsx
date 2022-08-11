import type { NextPage } from 'next'
import React from 'react'
import { RequireAuth } from '../src/components/RequireAuth'
import { Bookmarks } from '../src/pages/Bookmarks'

const BookmarksPage: NextPage = () => {
  return (
    <RequireAuth>
      <Bookmarks />
    </RequireAuth>
  )
}

export default BookmarksPage
