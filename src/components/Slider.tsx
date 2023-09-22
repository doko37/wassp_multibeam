"use client"

import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  margin: 1rem 0;
  height: 60px;

  @media(min-width: 700px) {
    height: auto;
    margin-top: 0;
  }
`

const Ctn = styled.div`
  position: relative;
  display: flex;
  overflow-x: auto;
  width: auto;
  z-index: 10;

  @media(min-width: 700px) {
   flex-wrap: wrap;
  }
`

interface props {
    children: React.ReactNode,
    top?: Number,
    images?: boolean
}

const Slider = ({ children, top, images }: props) => {
  return (
    <Wrapper>
      <Ctn className='no-scrollbar'>
          {children}
      </Ctn>
    </Wrapper>
  )
}

export default Slider