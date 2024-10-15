import React from 'react'
import { MdError } from "react-icons/md";

const NotFound = ({errorMsg}) => {
  console.log(errorMsg)
  
  
  return (
    <div className='h-full w-full flex flex-col  justify-center items-center'>
      <span><MdError className='font-bold text-9xl text-red-600'/></span>
        
      <div className='text-lg italic font-roboto'>
      {errorMsg.serverError && <p>Server error occured, Please try again later</p>} 
      {errorMsg.movieNotFound && <p>No Search Found</p>}
      </div>
    </div>
  )
}

export default NotFound
