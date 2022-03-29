import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/login'
import Header from '../components/Header'
import Messages from '../components/Messages'
import { useMoralis } from 'react-moralis'
const Home: NextPage = () => {
  const {isAuthenticated} = useMoralis()
  // const isAuthenticated =false;
   if (!isAuthenticated) return <Login/>

  
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-slate-800 overflow-hidden">
      <Head>
        <title>Metaverse Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> Welcome to the app </h1>
      
        <div className='max-width-screen 2xl mx-auto'>
           {/* Header component*/}
           <Header/>
           {/* message component */}
           <Messages/>
        </div>
      
     
      {/* footer component */}

    
    </div>
  )
}

export default Home
