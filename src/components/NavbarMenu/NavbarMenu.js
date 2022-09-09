import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { icons } from "../../constatns";

const NavbarMenu = () => {
  const [large, setLarge] = React.useState(false);

  return (
    <motion.nav
      className="grid w-100 grid-rows grid-flow-col items-center
      gap-2 navbar px-[2rem] 
      py-[1rem]   
      font-bold  "
      initial={{ y: -10 }}
      animate={{ y: 10 }}
      transition={{ duration: 0.6 }}
      exit={{ y: 0 }}
    >
      <Link to="/" className=" col-span-8">
        <div className=" flex items-center  capitalize ">
          <icons.GiTireIronCross
            className=" text-[12px]
           xl:text-[40px]  lg:text-lg md:text-md "
          />
          close
        </div>
      </Link>
      {large ? (
        <div className="text-lg col-span-4">
          <ul
            className=" flex  justify-between items-center  invisible
          xl:visible lg:visible
          capitalize text-[10px] xl:text-[18px]"
          >
            <li className=" active:text-dark ">
              <Link to="/"> About</Link>
            </li>
            <li>
              <Link to="/">The factory </Link>
            </li>
            <li>
              <Link to="/">The school of marketing </Link>
            </li>
            <li>
              <Link to="/">Journal </Link>
            </li>
          </ul>
        </div>
      ) : (
        <icons.HiOutlineMenuAlt1 onClick={()=>setLarge(true)}/>
      )}
    </motion.nav>
  );
};

export default NavbarMenu;
