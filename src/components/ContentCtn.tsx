import React from 'react'
import styled from 'styled-components'

const Ctn = styled.div`
    display: block;

    @media(min-width: 700px) {
        display: flex;
    }
`

interface Props {
    children: React.ReactNode
}

const ContentCtn = ({ children }: Props) => {
  return (
    <Ctn>{children}</Ctn>
  )
}

export default ContentCtn