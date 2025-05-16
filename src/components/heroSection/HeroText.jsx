import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";

const heroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amout: 0 }}
        className="lg:text-xl sm:text-[8px] uppercase text-cyan  lg:block"
      >
        {/* MERN Stack Developer */}
      </motion.div>

      <motion.h1
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amout: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange"
      >
        Epic
        {/* <span className="sm:hidden lg:inline">Rupasinghe</span> */}
      </motion.h1>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amout: 0 }}
        className="text-lg mt-2 sm:mb-5 text-white"
      >
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next perfect{" "}
          <span className="text-slate-500">modification</span>
          <br />
          with ease at Epic.
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Epic is your go-to shop for vehicle modification parts and custom
          stickers,
          <br />
          offering a wide range of accessories to perfect your ride.
        </div>
      </motion.div>
    </div>
  );
};

export default heroText;
