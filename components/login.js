import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

function Login() {
  const {authenticate} = useMoralis()
  return (
    <div className='bg-black relative  '>login
    
    <div className='flex  flex-col absolute z-50 h-4/6  w-full items-center justify-center space-y-4'>
    
    <Image 
    className=' object-cover rounded-full'
    src='/images/akeo.png' height={200} width={200}/>
       
       <button onClick={authenticate} className='bg-slate-600  rounded-lg p-5 font-bold animate-pulse text-white '>Login to the metaverse</button>
    </div>
    <div className='w-full h-screen'>
        {/* bg image */}
        <Image src='https://links.papareact.com/55n'
        layout='fill'
        objectFit='cover'
        />
    </div>


    </div>
  )
}

export default Login