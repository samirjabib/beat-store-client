import Image from 'next/image';

import { Promotion } from "../Promotion";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavBar } from "./NavBar";
import { useBackgroundScroll } from '../../hooks/useBackgroundHandle';

import logo from '../../../../assets/fire-base-logo.png'

import {
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

export const Header = () => {


  return (
    <div className="flex flex-col h-32 fixed top-0 w-full ">
      <Promotion />
      <div className="flex items-center p-4  top-0 mt-12 w-full  bg-white">
        <div className="flex flex-row w-full container  mx-auto justify-between items-center  ">
          <div className='flex flex-row items-center justify'>
            <Image src={logo} alt='fire-beats' width={60}/>
            <h1 className="font-bold text-xl  italic ">
              <span className="text-orange-500">Fire</span>
              <span className="text-red-500 ">Beats</span>
            </h1>
          </div>
          
          <div className="flex flex-row items-center justify-center gap-2 ">
            <NavBar />
            <AiOutlineShopping size={26} />
            <AiOutlineSearch size={22} className="hidden md:block" />
            <AiOutlineUser size={22} className="hidden md:block" />
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
