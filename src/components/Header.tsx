import React, { ReactNode } from 'react'
import localFont from "next/font/local"
const headerFont = localFont({ src: '../Assets/Fonts/norwester.otf'})
import styled from 'styled-components'

interface HeaderProps {
  children: ReactNode,
  fontSize: number,
  activeSlide?: boolean,
  small?: string
}

const HeaderText = styled.h1<HeaderProps>`
  position: relative;
  margin: 0.5rem 0;
  font-size: ${props => props.fontSize}px;

  @media(min-width: 700px) {
    font-size: ${props => props.small === 'true' ? props.fontSize : (props.fontSize + 20)}px;
  }
`

const Header = ({ children, fontSize, activeSlide, small }: HeaderProps) => {
  return (
    <HeaderText fontSize={fontSize} small={small ? small : 'false'} style={headerFont.style}><span style={{color: activeSlide ? '#041D2F' : 'white'}}>{children}</span></HeaderText>
  )
}

export default Header