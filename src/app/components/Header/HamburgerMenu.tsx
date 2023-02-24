"use client"

import { useNavBarStore } from '../../store/appStateStore';
import { Divide as Hamburger } from 'hamburger-react'

export const HamburgerMenu = () => {
    const {navBarState, onHandleNavBar} = useNavBarStore()
    console.log(navBarState)

  return (
    <Hamburger toggled={navBarState} toggle={() => onHandleNavBar(!navBarState)} />
  )
}
