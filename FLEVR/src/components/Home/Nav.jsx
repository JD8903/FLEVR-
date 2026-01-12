import React from "react";
import logo from "../../assets/logo.png";
import { useGSAP } from '@gsap/react';
import "./Nav.css";

const Nav = () => {
    
  return (
    <nav className="fixed top-0 left-0 h-full w-20 bg-[#100d17] flex flex-col items-center py-6 justify-evenly">
    
      <div>
        <img src={logo} className="logo"/>
      </div>

      <ul className="flex flex-col gap-6 text-white text-xl gap-8">
        <li className="flex items-center gap-2 cursor-pointer">
          <i className="ri-home-4-line"></i>
        </li>
        <li className="cursor-pointer"><i class="ri-tv-line"></i></li>
        <li className="cursor-pointer"><i class="ri-slideshow-view"></i></li>
        <li className="cursor-pointer"><i class="ri-artboard-fill"></i></li>
        <li className="cursor-pointer"><i class="ri-star-line"></i></li>
        <li className="cursor-pointer"><i class="ri-gift-line"></i></li>
        <li className="cursor-pointer"><i class="ri-search-ai-line"></i></li>
        <li className="cursor-pointer"><i class="ri-user-settings-line"></i></li>
      </ul>

    </nav>
  );
};

export default Nav;
