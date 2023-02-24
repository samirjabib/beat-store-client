import { Promotion } from "../Promotion";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavBar } from "./NavBar";

import { AiOutlineShopping, AiOutlineUser, AiOutlineSearch } from "react-icons/ai";

export const Header = () => {
  return (
    <div className="flex flex-col h-32 ">
            <Promotion />
      <div className="h-full flex items-center">
        <div className="flex flex-row w-full container  mx-auto justify-between items-center ">
          <h1 className="font-bold text-2xl italic">
            <span className="text-orange-500">Get</span>
            <span className="text-black">You</span>

            <span className="text-red-500 ">Delivery</span>
          </h1>
          <div className="flex flex-row items-center justify-center gap-2  ">
            <NavBar />
            <AiOutlineShopping size={22}/>
            <AiOutlineSearch size={22}/>
            <AiOutlineUser size={22}/>
            <HamburgerMenu />
          </div>
        </div>
        </div>

    </div>
  );
};
