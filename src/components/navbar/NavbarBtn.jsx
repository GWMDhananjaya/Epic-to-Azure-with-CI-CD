import React from "react";

import { BsWhatsapp } from "react-icons/bs";
const NavbarBtn = () => {
  return (
    <div className="sm:hidden md:block mt-0.5   ">
      <a
        href="https://wa.me/yourwhatsappphonenumber" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsWhatsapp className="bg-green-400 rounded-full w-10 h-auto" />
      </a>
    </div>
  );
};

export default NavbarBtn;
