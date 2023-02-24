"use client"

import { useNavBarStore } from '../../store/appStateStore';



export const NavBar = () => {
    const {navBarState, onHandleNavBar} = useNavBarStore()


  return (
    <div>
        <button onClick={ () => onHandleNavBar(!navBarState)}>CLICK NAVBAR</button>
    </div>
  )
}
