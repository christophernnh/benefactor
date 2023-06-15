import React, {useState} from "react";
import {FaSearch } from "react-icons/fa";
import {HiMenuAlt1, HiX} from "react-icons/hi"
import logoExpand from "../assets/logo1.png"
import logo from "../assets/logo.png"
import SideBar from "./SideBar";
import Backdrop from "./Backdrop";

export default function NavBar({Expand}) {

    const [sidebar, setSidebar] = useState(false);

    const toggleSideBar = () => {
        setSidebar((prevState) => !prevState)
    }

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
  return (
    <div>
        <nav className={Expand ? "flex items-center justify-between fixed top-0 w-full bg-transparent z-50 py-7  transition duration-300 ease-out before:border-[0.2px] before:border-grey before:absolute before:left-0 before:right-0 before:bottom-0 before:content-[''] before:mx-5" : "flex items-center justify-between fixed top-0 w-full bg-black/50 z-50 py-3 "}>
            <div className={isHovered ? "z-50 text-white text-3xl cursor-pointer pl-5 opacity-60 transition-all duration-1000 ease-linear " : "z-50 text-white text-3xl cursor-pointer pl-5 opacity-100"}  onClick={toggleSideBar} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {sidebar ? <HiX></HiX> : <HiMenuAlt1></HiMenuAlt1>}
            </div>

            <div>
                {Expand ? (<img className="w-24 invert" src={logoExpand} alt=""/>) : (<img className="w-14 brightness-150" src={logo} alt=""/>)} 
            </div>

            <div className="text-white text-2xl cursor-pointer pr-5 opacity-0">
                <FaSearch></FaSearch>
            </div>
            <div className="absolute" onClick={toggleSideBar}> <Backdrop SideBar={sidebar}/></div>
            <SideBar SideBar={sidebar} />
        </nav>
    </div>
  );
}