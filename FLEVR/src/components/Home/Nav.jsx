import React from "react";
import logo from "../../assets/logo.png";
import "./Nav.css";

const Nav = () => {
    
  return (
    <nav className="fixed top-0 left-0 h-screen w-20 bg-[#100d17] z-[999] flex flex-col items-center py-6 justify-evenly">

      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>

      <ul className="flex flex-col gap-8 text-white text-xl">
        <li className="cursor-pointer"><i className="ri-home-4-line"></i></li>
        <li className="cursor-pointer"><i className="ri-tv-line"></i></li>
        <li className="cursor-pointer"><i className="ri-slideshow-view"></i></li>
        <li className="cursor-pointer"><i className="ri-artboard-fill"></i></li>
        <li className="cursor-pointer"><i className="ri-star-line"></i></li>
        <li className="cursor-pointer"><i className="ri-gift-line"></i></li>
        <li className="cursor-pointer"><i className="ri-search-ai-line"></i></li>
        <li className="cursor-pointer"><i className="ri-user-settings-line"></i></li>
      </ul>
    </nav>
  );
};

export default Nav;
