"use client"

import { useNavBarStore } from '../../store/appStateStore';
import { Divide as Hamburger } from 'hamburger-react'

export const HamburgerMenu = () => {
    const {navBarState, onHandleNavBar} = useNavBarStore()
    console.log(navBarState)

  return (
    <div className='md:hidden block'>
      <Hamburger toggled={navBarState} toggle={() => onHandleNavBar(!navBarState)} size={26}/>
    </div>
  )
}
