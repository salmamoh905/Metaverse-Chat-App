import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/login'
import { useMoralis } from 'react-moralis'
const Home: NextPage = () => {
  const {isAuthenticated, logout} = useMoralis()
  // const isAuthenticated =false;
   if (!isAuthenticated) return <Login/>

  
  return (
    <div className="">
      <Head>
        <title>Metaverse Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> Welcome to the app </h1>

     <button onClick={logout}>logout</button>
    </div>
  )
}

export default Home
