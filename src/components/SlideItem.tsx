import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styled from 'styled-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Ctn = styled.div`
    border: gray solid 1px;
    padding: 1rem;
    border-radius: 0.25rem;
    margin: 0 0.5rem;
    max-width: 330px;
    max-height: 330px;
`

interface props {
    image: StaticImageData,
    alt: string,
    children: React.ReactNode
}

const SlideItem = ({ image, alt, children }: props) => {
  return (
    <Ctn>
        <Image src={image} alt={alt} style={{maxHeight: '180px', objectFit: 'cover', margin: '0 auto'}}/>
        <p className='text-white my-4'>{children}</p>
        <div className='flex justify-between items-center mt-8'>
            <p className='text-gray-300 text-[14px]'>View</p>
            <ArrowForwardIcon style={{color: 'lightgray', fontSize: '18px'}}/>
        </div>
    </Ctn>
  )
}

export default SlideItem