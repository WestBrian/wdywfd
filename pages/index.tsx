import type { NextPage } from 'next'
import Head from 'next/head'
import { RecipeSearch } from '../src/pages/RecipeSearch'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Whats For Dinner</title>
        <meta
          name="description"
          content="Find recipes when you are stuck on what to make"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecipeSearch />
    </div>
  )
}

export default Home
