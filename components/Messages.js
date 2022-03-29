
import React from 'react'
import SendMessage from '../components/SendMessage'
import {ByMoralis, useMoralis,useMoralisQuery} from "react-moralis"
function Messages() {
    const {user}=useMoralis();
  return (
    <div className='pb-56'>
        <div className='my-5'>
            <ByMoralis variant='dark' style={{marginLeft: "auto", marginRight:"auto"}}/>
        </div>
        <div>
            {/* each message */}
        </div>
        <div className='flex justify-center'>
            <SendMessage/>
        </div>
        <div className='text-center text-gray-300 mt-5'>
            <p>You are upto date {user.getUsername()}!</p>
        </div>
    </div>
  )
}

export default Messages