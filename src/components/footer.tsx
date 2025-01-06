/* eslint-disable react/no-unescaped-entities */
import { FaXTwitter } from "react-icons/fa6";
import { SiAwwwards } from "react-icons/si";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import React from "react";
import { AnimatedButton } from "./ui/animated-button";

const Footer = () => {
  return (
    <div className="py-[120px] px-[90px]">
      <div className="flex justify-between items-start gap-24">
        {/* left text container */}
        <div className="flex-1 flex flex-col gap-12">
          <h2 className="">
            We love crafting unforgettable digital experiences, brands and
            websites with people like you.
          </h2>
          <div className="space-y-6">
            <p className="text-gray-600">Get in touch</p>
            <div className="space-y-3 text-xl font-medium">
              <p>+44 207 112 82 85</p>
              <p>contact@artistsweb.com</p>
              <p>Artistsweb, 18 Soho Square, London, W1D 3QL, United Kingdom</p>
            </div>
          </div>
        </div>
        {/* right content */}
        <div className="flex flex-col gap-8 w-[537px]">
          {/* social icons */}
          <div className="bg-black text-white flex items-center justify-between px-10 py-3 rounded-full">
            <p className="text-xl">Follow us</p>
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="group p-4 border-2 border-transparent rounded-full hover:border-primary transition-all duration-500 ease-linear"
              >
                <FaInstagram className="size-6 group-hover:scale-110 transition-transform duration-500 ease-linear" />
              </a>
              <a
                href="#"
                className="group p-4 border-2 border-transparent rounded-full hover:border-primary transition-all duration-500 ease-linear"
              >
                <FaFacebook className="size-6 group-hover:scale-110 transition-transform duration-500 ease-linear" />
              </a>
              <a
                href="#"
                className="group p-4 border-2 border-transparent rounded-full hover:border-primary transition-all duration-500 ease-linear"
              >
                <FaXTwitter className="size-6 group-hover:scale-110 transition-transform duration-500 ease-linear" />
              </a>
              <a
                href="#"
                className="group p-4 border-2 border-transparent rounded-full hover:border-primary transition-all duration-500 ease-linear"
              >
                <SiAwwwards className="size-6 group-hover:scale-110 transition-transform duration-500 ease-linear" />
              </a>
            </div>
          </div>

          {/* get started card */}
          <div className="bg-[#ECF1F4] p-8 rounded-3xl text-center">
            <h2 className="mb-4">Let's get started</h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear about your project.
            </p>
            <AnimatedButton className="w-full text-white text-[1.5rem] font-medium py-4 px-8 rounded-full mt-12 bg-primary">
              Get in touch
            </AnimatedButton>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="flex items-center justify-between mt-[72px] text-[#71777e]">
        <p>&copy; 2025 Artistsweb Ltd. All rights reserved.</p>
        <div className="flex gap-8">
          <a
            href="https://www.artistsweb.com/privacy-policy/"
            target="_blank"
            className=" hover:text-black transition-all duration-300 ease-linear"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.artistsweb.com/terms-of-use/"
            target="_blank"
            className=" hover:text-black transition-all duration-300 ease-linear"
          >
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
