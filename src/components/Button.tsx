"use client"

import React from 'react'
import styled from 'styled-components'

const Text = styled.span`
    color: white;

    &:active {
        color: #041D2F;
    }
`

const Ctn = styled.button`
    border: 1px white solid;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    max-height: 40px;
    margin: 0.5rem;
    white-space: nowrap;

    &:active {
        background-color: white;
    }

    &:active ~ ${Text} {
        color: #041D2F;
    }

    @media(min-width: 700px) {
        width: min-content;
        max-height: 40px;
    }

`

interface props {
    children: React.ReactNode,
    changeState?: (params: any) => any,
    activeSlide: boolean
}

const Button = ({ children, changeState, activeSlide }: props) => {
  return (
    <Ctn className='rounded-full' onClick={changeState} style={{backgroundColor: activeSlide ? 'white' : 'transparent'}}>
        <Text style={{color: activeSlide ? '#041D2F' : 'white'}}>{children}</Text>
    </Ctn>
  )
}

export default Button