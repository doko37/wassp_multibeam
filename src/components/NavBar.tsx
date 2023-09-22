import React from 'react'
import Image from 'next/image'
import Logo from '../Assets/Logo.svg'
import Menu from '../Assets/Menu.svg'
import Header from './Header'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavBar = () => {
  return (
    <div className="flex justify-between px-4 items-center bg-gradient-to-b from-black to-transparent h-[100px] w-[100%] fixed top-0 z-[10]">
        <Image src={Logo} alt="logo" className="w-[125px] sm:w-auto"/>
        <div className="flex justify-around items-center gap-6">
            <Header fontSize={14} small='true'>SEARCH</Header>
            <Header fontSize={14} small='true'>LOGIN</Header>
            <div className="hidden sm:block cursor-pointer">
              <Header fontSize={14} small='true'>EN <KeyboardArrowDownIcon style={{height: '16px', position: 'relative'}}/></Header>
            </div>
            <Image src={Menu} alt="menu" className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default NavBar