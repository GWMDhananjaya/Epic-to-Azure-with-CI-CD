import React from "react";
import HeroPic from "./HeroPic";
import HeroText from "./HeroText";

const HeroMain = () => {
  return (
    <div className=" pt-30 sm:pt-40 lg:pt-30 pb-16 screen-2xl:pt-55">
      <div className="flex md:flex-row sm:flex-col  max-w-[1240px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
