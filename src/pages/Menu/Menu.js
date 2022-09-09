import React from "react";
import { NavbarMenu } from "../../components";
import { motion } from "framer-motion";
import { images } from "../../constatns";

const Menu = () => {
  return (
    <motion.section className="pb-14 h-full">
      <NavbarMenu />
      {/* Text  */}
      <div className="grid  grid-flow-row xl:grid-flow-col items-center gap-2 navbar px-[2rem] py-[1rem] ">
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 10 }}
          transition={{ duration: 0.9 }}
          whileInView
          exit={{ y: 0 }}
          className="ml-5 col-span-12 xl:col-span-10 font-menu text-[40px]
           xl:text-4xl
           lg:text-4xl
           tracking-widest
          drop-shadow-lg 
          "
        >
          <p>Retreat </p>
          <motion.p
            initial={{ visibility: "visible" }}
            animate={{ visibility: "hidden" }}
            transition={{ delay: 2, duration: 2, repeat: Infinity }}
            whileInView={{ visibility: "hidden" }}
          >
            Collection
          </motion.p>
          <p>Leisure </p>
          <p> cook & dine </p>
        </motion.div>
        {/* moving text */}
        <motion.div className=" -mt-[470px] xl:mt-[0]">
          <motion.h1
            initial={{ x: "100%", visibility: "hidden" }}
            animate={{ x: "-155%", visibility: "visible" }}
            transition={{ ease: "linear",delay:2, duration: 7, repeat: Infinity }}
            exit={{ display: "none" }}
            className="font-serif
             uppercase tracking-wide  w-100 -mt-[90px] absolute
               text-lg  xl:text-7xl lg:text-7xl "
          >
            Collection Collection Collection
          </motion.h1>
        </motion.div>

        {/* image */}
        <div
          className="col-span-6 
        lg:col-span-8 
        md:col-span-8 
        ml-auto"
        >
          <motion.img
            transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
            initial={{ visibility: "hidden", opacity: 0 }}
            animate={{ visibility: "visible", opacity: 1 }}
            exit={{ opacity: 0, width: "0" }}
            src={images.menugirl}
            className="shadow-lg  w-img xl:w-[80%] h-img xl:h-[100%] "
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Menu;
