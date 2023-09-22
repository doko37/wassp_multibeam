import React from 'react'

interface props {
    children: React.ReactNode
}

const Text = ({ children }: props) => {
  return (
    <p className='text-white relative z-[20] my-2'>{children}</p>
  )
}

export default Text