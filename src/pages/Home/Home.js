import React from "react";
import { Navbar } from "../../components";
import { images, icons } from "../../constatns";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      className="px-[1rem]  w-max-100  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      variants={{ Infinity }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <section
        className="app__home relative
       flex justify-between items-center 
       
       h-100
       xl:h-100 lg:h-100 md:h-80 "
      >
        <div
          className="app__home-search
         absolute flex
           items-center bottom-0 m-1 font-bold"
        >
          Search
          <div className="m-4 w-[60px] xl:w-[140px]  border-b-2 h-[5px]" />
        </div>
        <div className="m-auto">
          <img src={images.homeg} className="h-100" />
        </div>
        <div className="absolute bottom-3  right-10 flex justify-between items-center">
          <div>
            <icons.MdOutlineDangerous
              className="text-[15px] 
            xl:text-[25px]
            lg:text-[25px]
            md:text-[20px]
            "
            />
          </div>
          <div className="flex justify-around  items-center">
            <div className="m-2">
              <icons.FaCircle
                className="text-[5px] xl:text-[10px]
              lg:text-[10px]
              md:text-[10px]
              "
              />
            </div>
            <div className="m-2">
              <icons.FaCircle
                className="text-[5px] xl:text-[10px]
              lg:text-[10px]
              md:text-[10px]
              "
              />
            </div>
            <div className="m-2">
              <icons.FaCircle
                className="text-[5px] xl:text-[10px]
              lg:text-[10px]
              md:text-[10px]
              "
              />
            </div>
          </div>
        </div>

        {/* bntton for discover more */}
        <div>
          <button
            className="absolute right-10 xl:right-20
           text-dark mt-[150px]
           xl:mt-[70px] 
           lg:mt-[70px] 
           md:mt-[70px] 
           text-sm font-bold tracking-[0.6rem]
           xl:text-xl
           lg:text-lg
           md:text-md
           "
          >
            Discover more
          </button>
        </div>
      </section>

      {/* moving text */}
      <motion.div>
        <motion.h1
          initial={{ x: "100%" }}
          animate={{ x: "-110%" }}
          transition={{ ease: "linear", duration: 7, repeat: Infinity }}
          className="font-mono uppercase leading-8  w-max-100 tracking-wide absolute 
          top-[55%] 
          text-[16px]
          xl:text-7xl
          lg:text-5xl
          md:text-2xl
          "
        >
          Sustainable Fashion Famous Fashion
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default Home;
