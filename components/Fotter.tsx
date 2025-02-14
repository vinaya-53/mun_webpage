import React from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

export const Fotter = () => {
  return (
    <footer className="rounded-lg shadow  m-4 bg-transparent">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              alt=""
              loading="lazy"
              width="55"
              height="55"
              decoding="async"
              data-nimg="1"
              className=" object-contain rounded-md"
            />

            <button className="text-2xl font-semibold leading-6 bg-gradient-to-r from-[#efb98f] via-[#ef9a06] to-[#f1871d] bg-clip-text text-transparent">
              SCTMUN
            </button>
          </a>
          <div className="mt-16 text-left">
            <h3 className="text-lg font-semibold text-white">
              Connect with us
            </h3>
            <div className="mt-4 flex justify-left space-x-6">
              <a className="text-white hover:text-gray-300">SCT MUN CLUB</a>
              <a
                href="https://www.instagram.com/sct.mun/"
                className="text-white hover:text-gray-300"
              >
                <FaInstagram size={24} />
              </a>
              {/* <a
                href="https://in.linkedin.com/company/ieeesctsb"
                className="text-white hover:text-gray-300"
              >
                <FaLinkedin size={24} />
              </a>                                                */}
              <a
                href="mailto:sctmun2025@gmail.com"
                className="text-white hover:text-gray-300"
              >
                <FaEnvelope size={24} />
              </a>
              {/*}  <a
                href="https://github.com/amithbiju/dhyuthi_5.0"
                className="text-white hover:text-gray-300"
              >
                <FaGithub size={24} />  
              </a>  */}
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a className="hover:underline">SCTMUN</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
