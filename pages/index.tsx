import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { RecipeSearch } from '../src/pages/RecipeSearch'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Whats For Dinner</title>
      </Head>
      <RecipeSearch />
    </div>
  )
}

export default Home
