import { Promotion } from "../Promotion";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavBar } from "./NavBar";

import {
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

export const Header = () => {
  return (
    <div className="flex flex-col h-32 bg-black">
      <Promotion />
      <div className="flex items-center p-4 fixed top-0 mt-12 w-full h-16">
        <div className="flex flex-row w-full container  mx-auto justify-between items-center ">
          <h1 className="font-bold text-xl md:text-2xl italic ">
            <span className="text-orange-500">Get</span>
            <span className="text-black">You</span>

            <span className="text-red-500 ">Delivery</span>
          </h1>
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
