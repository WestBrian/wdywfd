import Head from 'next/head'
import { CookingSvg } from '../components/CookingSvg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>What Do You Want For Dinner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 py-8 text-center">
        <h1 className="font-bold text-2xl md:text-5xl mb-8">
          What Do You Want For Dinner?
        </h1>
        <div className="mb-8">
          <CookingSvg />
        </div>
        <div>
          <button className="bg-gradient-to-tr from-green-500 to-green-300 hover:from-green-500 hover:to-green-400 active:from-green-500 active:to-green-400 px-8 py-4 rounded-lg text-white font-bold shadow-lg transition-colors">
            Find a Dinner
          </button>
        </div>
      </main>
    </div>
  )
}
