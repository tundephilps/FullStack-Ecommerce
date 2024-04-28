import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/images/logo.png";
import { FaPhone, FaSearch, FaUser } from "react-icons/fa";
import { FaBasketShopping, FaLocationPin } from "react-icons/fa6";

const Header = () => {
  return (
    // <header>
    //   <nav>
    //     <div className="navbar justify-between bg-base-300">
    //       <div>
    //         <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             className="inline-block w-5 h-5 stroke-current"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             ></path>
    //           </svg>
    //         </label>
    //         <Link href="/" className="btn btn-ghost text-lg">
    //           E commerce
    //         </Link>
    //       </div>

    //       {/* <Menu /> */}
    //     </div>
    //     <div className="bg-base-300 block md:hidden text-center pb-3">
    //       {/* <SearchBox /> */}
    //     </div>
    //   </nav>
    // </header>

    <nav className="h-[15vh]  p-3 flex items-center gap-[15%] max-xl:flex-col bg-white">
      <div className="flex items-center w-[55%] justify-end gap-[10%] max-xl:gap-[5%]  max-xl:w-[100%] max-sm:h-[100%]">
        <Link href={""}>
          <Image
            className="max-xl:w-32 max-sm:w-24"
            src={logo}
            width={50}
            height={50}
            alt="logo"
          />
        </Link>

        <div className="flex items-center max-sm:self-end w-[100%]  max-md:px-2 relative">
          <div className="flex items-center w-[100%] z-50 ">
            <div className="flex relative w-[100%] max-md:hidden">
              <input
                type="text"
                placeholder="Search..."
                className="border-[#0b1a44]  rounded-xl  bg-[#f2f2f2] border-[1.5px] outline-none h-[2.8rem] px-2  placeholder-bold  w-[100%] max-xl:w-[50%] "
                style={{ fontWeight: "bold", fontSize: "0.8rem" }}
              />
              <FaSearch
                className="z-50 absolute right-3 max-xl:right-[52%] top-1/2 -translate-y-1/2"
                width={15}
                height={15}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[40%] flex gap-[10%] max-xl:absolute max-xl:h-[15vh] max-xl:top-0 max-xl:items-center  right-0 max-xl:justify-end  max-xl:gap-[5%] max-xl:w-[80%] max-lg:w-[70%] max-md:w-[100%] max-xl:px-5 max-sm:items-center">
        <div className="flex items-center cursor-pointer mr-5 max-sm:mr-2">
          <div className="flex flex-col justify-center">
            <FaPhone
              width={35}
              height={35}
              className="max-xl:w-5 max-xl:h-5 text-black ml-3 mr-3"
            />
            <span className="font-bold text-[0.6rem] hidden max-xl:inline ">
              phone
            </span>
          </div>
          <span className="font-bold max-xl:text-[0.8rem] max-xl:hidden text-black">
            0151 548 1554
          </span>
        </div>

        <div className="flex items-center gap-10 max-sm:gap-5">
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <FaLocationPin width={13} height={13} className="text-black" />
            <span className="font-bold text-[0.6rem] text-black">
              Showrooms
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <FaUser width={18} height={18} className="text-black" />
            <span className="font-bold text-[0.6rem] text-black">Account</span>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <FaBasketShopping width={18} height={18} className="text-black" />
            <span className="font-bold text-[0.6rem] text-black">Basket</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
