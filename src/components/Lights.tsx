import React from 'react'
import styled from 'styled-components'

interface props {
    top: number,
    left: number,
    blur: number,
    zindex: number
}

const Ctn = styled.div<props>`
    background-color: #364A58;
    opacity: 60%;
    border-radius: 100%;
    height: 300px;
    width: 300px;
    filter: blur(${props => props.blur}px);
    z-index: ${props => props.zindex};
    position: absolute;
    top: ${props => props.top}%;
    left: ${props => props.left}%;
`

const Lights = ({ top, left, blur, zindex }: props) => {
  return (
    <Ctn top={top} left={left} blur={blur} zindex={zindex}/>
  )
}

export default Lights