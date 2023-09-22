import React from 'react'
import styled from 'styled-components'

interface CtnProps {
    images?: string
}

const Ctn = styled.div<CtnProps>`
    display: flex;
    width: 100%;
    overflow-x: hidden;
    height: auto;
    align-items: center;
    justify-content: start;
    border-top: ${props => props.images ? 'none' : '1px gray solid'};
    border-bottom: ${props => props.images ? 'none' : '1px gray solid'};
    padding: 0.75rem 0;
`

const Slider = styled.div<CtnProps>`
    display: flex;
    justify-content: start;
    align-items: center;
    white-space: nowrap;
    width: fit-content;
    animation: ${props => props.images ? '20s slide infinite linear'  : '8s slide infinite linear'};

    @keyframes slide {
        from {
            transform: translateX(0%);
        } to {
            transform: translate(-100%);
        }
    }
`

interface props {
    children: React.ReactNode,
    images?: boolean
}

const SlideShow = ({ children, images }: props) => {
  return (
    <Ctn images={images ? 'true' : undefined}>
        <Slider images={images ? 'true' : undefined}>
            {children}
        </Slider>
        <Slider images={images ? 'true' : undefined}>
            {children}
        </Slider>
        <Slider images={images ? 'true' : undefined}>
            {children}
        </Slider>
    </Ctn>
  )
}

export default SlideShow