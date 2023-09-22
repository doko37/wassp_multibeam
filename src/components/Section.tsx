import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'
import Header from './Header'
import styled from 'styled-components'

interface CtnProps {
  translateY: number,
  zIndex: number
}

const Ctn = styled.div`
  height: fit-content;
  background-color: transparent;
  overflow: hidden;
`

interface ImageCtnProps {
  layers?: string,
  secondlayer?: string
}

const ImageCtn = styled.div<ImageCtnProps>`
  width: 100%;
  position: relative;
  background: #08142c;
  padding-top: 0;
  background-size: ${props => props.layers ? props.secondlayer ? '100%' : '100%' : 'cover'};
  background-position: ${props => props.layers ? props.secondlayer ?  '30% 80%' : 'left' : 'center'};
  height: ${props => props.layers ? '600px' : '800px'};

  @media(min-width: 700px) {
    padding-top: 56.25%;
    background-size: ${props => props.layers ? props.secondlayer ? '35%' : '60%' : 'cover'};
    background-position: ${props => props.layers ? props.secondlayer ?  '30% 70%' : 'left' : 'center'};
    height: 800px;
  }
`

interface sectionProps {
    image?: StaticImageData,
    zIndex: number,
    children: ReactNode,
    translateY: number,
    layers?: boolean,
    secondLayer?: boolean
}

const Section = ({ image, zIndex, children, translateY, layers, secondLayer }: sectionProps) => {
  return (
    <Ctn style={{transform: `translate(0, ${translateY}px)`, zIndex: zIndex}}>
        {!layers && <div className="absolute top-0 w-[100%] h-[100%] bg-background opacity-10 z-[30]"/>}
        {children}
        {translateY !== 0 && <div className='h-[200px] relative z-[-1]' style={{backgroundImage: `linear-gradient(180deg, rgba(4, 29, 47, 0), rgba(4, 29, 47, 1))`}}/>}
        <ImageCtn 
          layers={layers ? 'true' : undefined}
          secondlayer={secondLayer ? 'true' : undefined}
            style={{
                backgroundImage: image ? `url(${image.src})` : 'none', 
                zIndex: zIndex,
                backgroundRepeat: 'no-repeat'
            }}>
        </ImageCtn>
        {translateY !== 0 && layers && translateY > -201 && <div className='h-[200px] z-[10] relative' style={{backgroundImage: `linear-gradient(180deg, rgba(4, 29, 47, 1), rgba(4, 29, 47, 0))`}}/>}
    </Ctn>
  )
}

export default Section