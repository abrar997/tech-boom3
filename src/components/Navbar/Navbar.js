import React from "react";
import { motion } from "framer-motion";
import { icons } from "../../constatns";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav className="navbar flex  justify-between xl:justify-between sm:justify-around items-center p-[1rem] xl:p-[20px] font-bold w-max-[100%]  text-[12px] xl:text-lg ">
      
      <Link to="menu">
        <div className="left flex items-center ">
          <icons.HiOutlineMenuAlt1 className="text-[21px] xl:text-[41px] " />
          <span className="ml-1 text-md"> Menu</span>
        </div>
      </Link>
      
      <div className="logo text-xl  uppercase tracking-wider  invisible 2xl:visible xl:visible 
       md:visible ">
        Alababma chanin
      </div>
      <div>
        <ul className="  flex list-none items-center  capitalize">
          <li className="cursor-pointer">login </li>
          <li className="ml-4  cursor-pointer flex items-center">
           <span className="">my bag</span>  <span className="ml-1 rounded-[50%] border px-1"> 2 </span>{" "}
          </li>
          
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
