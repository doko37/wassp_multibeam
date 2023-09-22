import React from 'react'

interface props {
    children: React.ReactNode,
    top?: number,
    bottom?: number,
    right?: number
}

const Paragraph = ({ children, top, bottom, right }: props) => {
  return (
    <div className="absolute mx-4 z-[20]" style={{top: top ? `${top}px` : '', bottom: bottom ? `${bottom}px` : '', right: right ? `${right}px` : ''}}>
        {children}
    </div>
  )
}

export default Paragraph