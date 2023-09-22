import React from 'react'
import styled from 'styled-components'
import wasspLogo from '../Assets/WasspMultibeam.svg'
import Image, { StaticImageData } from 'next/image'
import ActionButton from './ActionButton'
import Lights from './Lights'

const Ctn = styled.div`
    margin: 1rem;
`

const Content = styled.div`
    display: flex;
    justify-content: start;
    align-items: stretch;
    margin-bottom: 4rem;
`

interface LinkProps {
    first?: string
}

const Links = styled.div<LinkProps>`
    margin-right: ${props => props.first ? '4rem' : '0'};
    position: relative;
`

interface LogoProps {
    image: StaticImageData
}

const Logo = styled.div<LogoProps>`
    margin: 2rem 0;
    height: 60px;
    background-image: URL(${props => props.image.src});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    @media(min-width: 700px) {
        margin: 2rem;
        height: 200px;
    }
`

const Text = styled.p`
    color: white;
    font-size: 12px;
    margin: 0.5rem 0;

    @media(min-width: 700px) {
        font-size: 14px;
    }
`

const Footer = () => {
  return (
    <Ctn>
        <Lights top={85} left={80} blur={100} zindex={5}/>
        <div className='block sm:flex justify-between sm:mx-8'>
            <div className='mb-16 max-w-[350px]'>
                <p className='text-white font-[16px] sm:text-[20px]'>Nunc viverra quam ac felis consequat tempor. Nunc bibendum massa ut ipsum ultricies.</p>
                <div className='my-16'>
                    <ActionButton>Contact</ActionButton>
                </div>
                <Text><a className='underline text-[14px] text-gray-300'>Subscribe to our newsletter</a></Text>
            </div>
            <Content>
                <Links first='true'>
                    <Text className='underline'>Home</Text>
                    <Text>Products</Text>
                    <Text>About</Text>
                    <Text>News</Text>
                    <Text>Resources</Text>
                    <Text>Contact</Text>
                    <br/>
                    <Text>Facebook</Text>
                    <Text>Instagram</Text>
                    <Text>Youtube</Text>
                </Links>
                <Links>
                    <Text>Offices</Text>
                    <Text>Auckland - NZ</Text>
                    <Text>Essex - UK</Text>
                    <p className='absolute bottom-0 left-0 text-white text-[12px] whitespace-nowrap mb-2'>@2023 WASSP</p>
                </Links>
            </Content>
        </div>
        <Logo image={wasspLogo}>
            <div className='absolute w-[100%] h-[100%] bg-background opacity-90 top-0 left-0'/>
        </Logo>
    </Ctn>
  )
}

export default Footer