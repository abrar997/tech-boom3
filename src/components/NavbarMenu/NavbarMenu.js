import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { icons } from "../../constatns";
const NavbarMenu = () => {
  return (
    <motion.nav
      className="grid w-100 grid-rows grid-flow-col items-center gap-2 navbar px-[2rem] py-[1rem]   
     font-bold"
      initial={{ y: -10 }}
      animate={{ y: 10 }}
      transition={{ duration: 0.6 }}
      exit={{ y: 0 }}
    >
      <Link to="/" className=" col-span-8">
        <div className=" flex items-center capitalize ">
          <icons.GiTireIronCross fontSize={40} /> close
        </div>
      </Link>
      <div className="text-lg col-span-4">
        <ul className=" flex justify-between  capitalize ">
          <li className=" active:text-dark ">
            <Link to="/"> About</Link>{" "}
          </li>
          <li>
            <Link to="/">The factory </Link>{" "}
          </li>
          <li>
            <Link to="/">The school of marketing </Link>
          </li>
          <li>
            <Link to="/">Journal </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default NavbarMenu;
