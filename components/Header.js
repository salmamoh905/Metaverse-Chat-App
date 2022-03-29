import Image from 'next/image';
import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from '../components/Avatar'
import ChangeUsername from '../components/ChangeUsername'
function Header() {
    const { user } = useMoralis();
  return (
    <div className=' sticky top-0  z-50 bg-black shadow-sm text-white border-b-2 border-slate-700'>
        <div className='grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center'>
            <div className='relative h-24 w-24 mx-auto hidden lg:inline-grid'>
                <Image 
                className='rounded-full'
                objectFit='cover'
                layout='fill' 
                src='/images/akeo.png'/>
            </div>   
            <div className='col-span-4 text-left lg:text-center'>
              <div className=' relative h-48 w-48 lg:mx-auto border-slate-700 border-8 rounded-full'>
                <Avatar logoutOnPress/>
              </div>
              <h1 className='text-3xl'>Welcome To Akeo Metaverse</h1>
              {/* the avatar ,message and username */}
              <h2 className='text-5xl font-bold truncate'>{user.getUsername()}</h2>

              <ChangeUsername />
            </div>        

        </div>
    </div>
  )
}

export default Header