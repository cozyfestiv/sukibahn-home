import React from "react";
import { Link } from "react-router-dom";
import logoFooter from "../../assets/Logo/roundlogo-s.png";

const Footer = () => {
  return (
    <div>
      <hr className="mx-40" />
      <div className="flex flex-col items-center m-5">
        <img src={logoFooter} alt="" className="w-42 mt-5" />
        <p className="uppercase text-red-1 text-xl">Studio</p>
        <nav className="bg-bgtext-white p-4">
          <div className="flex justify-between">
            <ul className="flex self-center space-x-4 font-poppins text-sm text-black">
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <p className="text-xs">&#169; Copyright 2026 - Sukibahn Studio </p>
      </div>
    </div>
  );
};

export default Footer;
