import React from "react";
import { NavbarMenu } from "../../components";
import { motion } from "framer-motion";
import { images } from "../../constatns";

const TextVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
const Menu = () => {
  return (
    <motion.section className=" h-screen">
      <NavbarMenu />

      {/* Text  */}
      <div className="grid  grid-rows grid-flow-col items-center gap-2 navbar px-[2rem] py-[1rem] ">
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 10 }}
          transition={{ duration: 0.9 }}
          whileInView
          exit={{ y: 0 }}
          className="ml-5 col-span-10 font-menu text-4xl drop-shadow-lg "
        >
          <p>Retreat </p>
          <motion.p
            initial={{ visibility: "visible" }}
            animate={{ visibility: "hidden" }}
            transition={{ delay: 2, duration: 2 }}
            whileInView={{ visibility: "hidden" }}
            exit={{ visibility: "visible" }}
          >
            Collection
          </motion.p>
          <p>Leisure </p>
          <p> cook & dine </p>
        </motion.div>

        {/* moving text */}
        <motion.div>
          <motion.h1
            initial={{ x: "100%", visibility: "hidden" }}
            animate={{ x: "-155%", visibility: "visible" }}
            transition={{ ease: "easeIn", duration: 8, delay: 0.8 }}
            exit={{ display: "none" }}
            className=" font-serif uppercase tracking-wide  w-100 -mt-[90px] absolute  text-7xl   "
          >
            Collection Collection Collection
          </motion.h1>
        </motion.div>

        {/* image */}
        <div className="col-span-2 ml-auto">
          <motion.img
            transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
            initial={{ visibility: "hidden", opacity: 0 }}
            animate={{ visibility: "visible", opacity: 1 }}
            exit={{ opacity: 0, width: "0" }}
            src={images.menugirl}
            width="60%"
            className="shadow-lg"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Menu;
