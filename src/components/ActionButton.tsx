import Image from 'next/image'
import React from 'react'
import ArrowRight from '../Assets/ArrowRight.svg'
import styled from 'styled-components'

const Text = styled.span`
    color: white;

    &:active {
        color: #041D2F;
    }
`

const Button = styled.button`
    &:active {
        background-color: white;
    }

    &:active ${Text} {
        color: #041D2F;
    }
`

interface props {
    children: React.ReactNode
}

const ActionButton = ({children}: props) => {
  return (
    <Button className="rounded-full border border-white flex items-center justify-center p-3 px-8 my-8 bg-transparent">
        <Text>{children}</Text>
        <Image src={ArrowRight} alt="arrowDown" className="ml-4" />
    </Button>
  )
}

export default ActionButton